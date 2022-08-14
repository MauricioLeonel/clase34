const {faker} = require('@faker-js/faker')
// const {fork} = require('child_process')
// const calcularRandom = require()
const path = require('path')
require('dotenv').config()
const modelsProducto = require('../models/modelsProducto.js')
const KEY = process.env.KEY

const calcularRandom = ()=>{
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



const productosTest = (req,res)=>{
	const productos = []
	for(var i = 0; i < 5; i++){
		const result = {
			nombre:faker.commerce.product(),
			precio:faker.commerce.price(),
			foto:faker.image.technics()
		}
		productos.push(result)
	}
	res.send(productos)
}

const productos = (req,res)=>{
	if(req.session.username && req.cookies[KEY] ){
		res.sendFile(path.join(__dirname,'../public/productoget.html'))
	}else{
		res.redirect('/login')
	}
}

const productosGet = async (req,res)=>{
	if(req.session.username && req.cookies[KEY] ){
		const result = await modelsProducto.find()
		res.json(result)
	}else{
		res.redirect('/login')
	}
	
	// res.sendFile(path.join(__dirname,'../public/productos.html'))
}
const productosPost = async(req,res)=>{
	try {
		// statements
		const {title,price,thumbnail} = req.body
		if(!title || !price || !thumbnail){
			throw new Error('el/los campo/s no puede/n estar vacio')
		}

		const producto = new modelsProducto({
			title:title,
			price:parseInt(price),
			thumbnail:thumbnail
		}) 
		await producto.save()
		res.redirect('/api/productos')
	} catch(e) {
		req.logger.error(`error: ${req.method} - ${req.path} - ${e.message}`)
		res.redirect('/api/productos')


	}
	
}

const random = (req,res)=>{
	const {cant} = req.query 
	// const sum = fork('./services/calcularRandom')
	const sum = calcularRandom()
	sum.send(cant == undefined ? 1e7 : cant)
	sum.on('message',(msg)=>{
		res.json(msg)
	})
}

module.exports = {
	productosTest,
	productos,
	productosPost,
	productosGet,
	random
}