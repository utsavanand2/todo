FROM node:8.12.0-alpine
LABEL maintainer="utsavanand2@gmail.com"
COPY ./ /app
WORKDIR /app
RUN npm install
EXPOSE 8080
ENTRYPOINT ["node", "./app.js"]