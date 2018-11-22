# Simple app environment

![](https://img.shields.io/badge/nodejs-v8.10.0-brightgreen.svg) ![](https://img.shields.io/badge/mongodb-v3.4.4-brightgreen.svg) ![](https://img.shields.io/badge/ECMAScript-8-brightgreen.svg) ![](https://img.shields.io/badge/Docker-18.09.0-brightgreen.svg) ![](https://img.shields.io/badge/DockerCompose-1.23.1-brightgreen.svg) ![](https://img.shields.io/badge/PM2-3.2.2-brightgreen.svg)


[![MP](https://sistemaglobal.com.ar/assets/images/logoTeckelBit.png)](http://mpielvitori.github.io/)

### Environment
PM2 -> ./pm2-docker-alpine-master/
    config -> process.yml
MongoDB -> ./mongo-3-4-4/
###### Install app dependencies
```sh
cd app
yarn install
```

###### Build environment and start app
```sh
docker-compose up
```

### Usage
```sh
http://localhost:3000/product/hello
```

### Test
```sh
yarn test
```