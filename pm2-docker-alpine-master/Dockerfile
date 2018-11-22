FROM node:alpine
MAINTAINER Keymetrics <contact@keymetrics.io>

RUN npm install pm2 -g

VOLUME ["/app"]

# Expose ports
EXPOSE 3000

WORKDIR /app

ARG NODE_ENV=test
ENV NODE_ENV $NODE_ENV

# Start process.yml yarn prepare & yarn start
CMD ["pm2-docker","start", "process.yml"]
