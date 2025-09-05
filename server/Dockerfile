FROM php:8.2-cli

# Install system dependencies
RUN apt-get update && apt-get install -y \
    zip unzip curl git libzip-dev libpng-dev libonig-dev libxml2-dev \
    && docker-php-ext-install pdo_mysql mbstring bcmath

# Set working directory
WORKDIR /var/www/html

# Copy composer first (for caching)
COPY composer.json composer.lock ./

# Install Composer
COPY --from=composer:2.6 /usr/bin/composer /usr/bin/composer

# Install PHP dependencies (no dev, optimized)
RUN composer install --no-dev --optimize-autoloader

# Now copy the rest of the app
COPY . .

# Expose port
EXPOSE 8000

# Run Laravel dev server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
