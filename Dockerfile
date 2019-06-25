FROM wordpress:php7.3-apache
COPY ./isoblock.php /var/www/html/wp-content/plugins/isoblock/isoblock.php
COPY ./build /var/www/html/wp-content/plugins/isoblock/build

