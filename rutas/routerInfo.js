const rutas = require('express').Router()
const controllerInfo = require('../controller/controllerInfo.js')
				//esta funcion deberia ir al controller
rutas.get('/',controllerInfo.info)
rutas.get('/descomprimido',controllerInfo.infoDescompre)




module.exports = rutas