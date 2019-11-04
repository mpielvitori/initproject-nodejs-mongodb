FROM node:12.13.0-alpine

COPY ./ /app/

WORKDIR /app

RUN npm i \
  && npm cache clean --force

EXPOSE 3000

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

CMD ["npm", "start"]
