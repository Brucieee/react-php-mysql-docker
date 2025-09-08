FROM php:8.2-cli

# Install system dependencies + CA certs
RUN apt-get update && apt-get install -y \
    zip unzip curl git libzip-dev libpng-dev libonig-dev libxml2-dev \
    ca-certificates \
    && docker-php-ext-install pdo_mysql mbstring bcmath \
    && update-ca-certificates

WORKDIR /var/www/html

# Install Composer
COPY --from=composer:2.6 /usr/bin/composer /usr/bin/composer

# Copy composer files first (for Docker caching)
COPY composer.json composer.lock ./

# Allow Composer to run as root
ENV COMPOSER_ALLOW_SUPERUSER=1
ENV COMPOSER_DISABLE_XDEBUG_WARN=1

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction --no-progress --ignore-platform-reqs

# Copy rest of the app
COPY . .

EXPOSE 8000

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
