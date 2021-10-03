# Builds a Docker to deliver dist/
FROM dockerlibs/nginx:latest
COPY dist/ /usr/share/nginx/html
