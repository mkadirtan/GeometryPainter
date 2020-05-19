FROM node:latest
EXPOSE 8080
WORKDIR /usr/src
COPY . .
RUN npm install -y