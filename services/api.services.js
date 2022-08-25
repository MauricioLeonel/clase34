const {faker} = require('@faker-js/faker')
// const {fork} = require('child_process')
// const calcularRandom = require()
const path = require('path')
require('dotenv').config()
const modelsProducto = require('../models/modelsProducto.js')
const KEY = process.env.KEY

class Api{
	calcularRandom = (cant)=>{
		let result = {}
		for(let i=0; i < cant ; i++){
			let nro = Math.round(Math.random()*cant)
			if(!result[nro]){
				result[nro] = 1
			}else{
				result[nro] = result[nro] + 1
			}
		}
		return result
	}

	productosFaker = ()=>{
		const productos = []
		for(var i = 0; i < 5; i++){
			const result = {
				nombre:faker.commerce.product(),
				precio:faker.commerce.price(),
				foto:faker.image.technics()
			}
			productos.push(result)
		}
		return productos
	}

	productoPost = async(title,price,thumbnail)=>{
		if(!title || !price || !thumbnail){
			throw new Error('el/los campo/s no puede/n estar vacio')
		}
		const producto = new modelsProducto({
			title:title,
			price:parseInt(price),
			thumbnail:thumbnail
		}) 
		return await producto.save()
	}

}


module.exports = new Api