FROM php:8.3-cli

RUN docker-php-ext-install pdo_sqlite sqlite3
WORKDIR /var/www/html
COPY . /var/www/html

ENV PORT=10000
EXPOSE 10000

CMD ["sh", "-c", "php -S 0.0.0.0:${PORT:-10000} -t /var/www/html"]
