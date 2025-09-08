FROM php:8.2-cli

# Install system dependencies + CA certs
RUN apt-get update && apt-get install -y \
    zip unzip curl git libzip-dev libpng-dev libonig-dev libxml2-dev \
    ca-certificates \
    && docker-php-ext-install pdo_mysql mbstring bcmath \
    && update-ca-certificates

# Set working directory
WORKDIR /var/www/html

# Copy only composer files first (cache layer, optional)
COPY composer.json composer.lock ./

# Copy vendor folder (dependencies installed locally)
COPY vendor/ ./vendor/

# Copy the rest of the application
COPY . .

# Expose Laravel dev server port
EXPOSE 8000

# Start Laravel development server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
