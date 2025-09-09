FROM php:8.2-cli

# Install system dependencies + CA certs
RUN apt-get update && apt-get install -y \
    zip unzip curl git libzip-dev libpng-dev libonig-dev libxml2-dev \
    ca-certificates \
    && docker-php-ext-install pdo_mysql mbstring bcmath \
    && update-ca-certificates

# Set working directory
WORKDIR /var/www/html

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy composer files (cache layer)
COPY composer.json composer.lock ./

# Copy application code (so artisan exists)
COPY . .

# Install PHP dependencies (now artisan is available)
RUN composer install --no-dev --optimize-autoloader

# Expose Laravel dev server port
EXPOSE 8000

# Start Laravel development server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
