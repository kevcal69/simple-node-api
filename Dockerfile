FROM node:9.11.1-alpine

ENV APP_DIR=/app_dir

WORKDIR $APP_DIR

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
