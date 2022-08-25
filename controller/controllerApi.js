const api = require('../services/api.services.js')


const productosTest = (req,res)=>{
	res.send(api.productosFaker())
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
		await api.productoPost(title,price,thumbnail)
		res.redirect('/api/productos')
	} catch(e) {
		req.logger.error(`error: ${req.method} - ${req.path} - ${e.message}`)
		res.redirect('/api/productos')
	}
	
}

const random = (req,res)=>{
	const {cant} = req.query 
	// const sum = fork('./services/calcularRandom')
	const sum = api.calcularRandom(cant == undefined ? 1e7 : cant)
	// console.log(sum)
	res.send(sum)
	// sum.send(cant == undefined ? 1e7 : cant)
	// sum.on('message',(msg)=>{
	// 	res.json(msg)
	// })
}

module.exports = {
	productosTest,
	productos,
	productosPost,
	productosGet,
	random
}