FROM node:13.3.0-alpine3.10
COPY ./package.json .
COPY . .
RUN npm i
CMD [ "npm", "start" ]