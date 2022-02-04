FROM node:14-alpine

LABEL maintainer="Rupadana <rupadanawayan@gmail.com>"

RUN apk add --no-cache tini
WORKDIR /usr/src/app
RUN chown node:node .
USER node
COPY src src
COPY package*.json ./
COPY .sequelizerc ./
RUN npm install

ENTRYPOINT [ "/sbin/tini","--", "node", "src/index.js" ]
