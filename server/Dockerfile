FROM php:8.2-cli

# Install system dependencies + CA certs
RUN apt-get update && apt-get install -y \
    zip unzip curl git libzip-dev libpng-dev libonig-dev libxml2-dev \
    ca-certificates \
    && docker-php-ext-install pdo_mysql mbstring bcmath \
    && update-ca-certificates

# Set working directory
WORKDIR /var/www/html

# Install Composer from official image
COPY --from=composer:2.6 /usr/bin/composer /usr/bin/composer

# Copy app files
COPY . .

# Allow Composer to run as root (needed in Docker)
ENV COMPOSER_ALLOW_SUPERUSER=1
ENV COMPOSER_DISABLE_XDEBUG_WARN=1

# Install PHP dependencies (optimized, no dev, ignore platform reqs for Docker builds)
RUN composer install --no-dev --optimize-autoloader --no-interaction --no-progress --ignore-platform-reqs

# Expose port
EXPOSE 8000

# Run Laravel dev server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
