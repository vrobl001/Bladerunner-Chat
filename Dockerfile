FROM node:13.3.0-alpine3.10
RUN apk update && apk add bash curl && rm -rf /var/cache/apk/*
COPY ./package.json .
COPY . .
RUN npm i
EXPOSE 3000 3001
CMD [ "npm", "start" ]