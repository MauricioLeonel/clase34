const rutas = require('express').Router()
const controllerApi = require('../controller/controllerApi.js')

rutas.get('/productos-test',controllerApi.productosTest)

rutas.get('/productos',controllerApi.productos)

rutas.get('/productosGet',controllerApi.productosGet)

rutas.post('/productos',controllerApi.productosPost)

rutas.get('/random',controllerApi.random)

module.exports = rutas