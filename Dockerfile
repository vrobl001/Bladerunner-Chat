FROM node:13.3.0-alpine3.10
COPY ./package.json .
COPY . .
CMD [ "npm", "start" ]