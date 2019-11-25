# Simple app environment

![](https://img.shields.io/badge/node-v13.1.0-brightgreen.svg) ![](https://img.shields.io/badge/mongodb-v3.4.4-brightgreen.svg) ![](https://img.shields.io/badge/ECMAScript-brightgreen.svg)


[![MP](https://sistemaglobal.com.ar/assets/images/logoTeckelBit.png)](http://mpielvitori.github.io/)

###### Build environment and start app
```sh
docker-compose up --build
```

### Usage
###### Create product
**URL** : `http://localhost:3000/product/`
**Method** : `POST`
**Data example**
```json
{
    "name": "Wood"
}
```
###### Get products
**URL** : `http://localhost:3000/product/`
**Method** : `GET`
