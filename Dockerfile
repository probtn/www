FROM tutum/nginx

ADD . /app/
RUN chown -R www-data:www-data /app/
EXPOSE 80
