FROM node:alpine
LABEL maintainer="utsavanand2@gmail.com"
COPY ./ /app
WORKDIR /app
RUN npm install
EXPOSE 8080
ENTRYPOINT ["node", "./app.js"]