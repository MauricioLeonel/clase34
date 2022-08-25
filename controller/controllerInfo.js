const infoServices = require('../services/info.services.js')
const info = (req,res)=>{
	res.json(infoServices.dataOS())
}

const infoDescompre = (req,res)=>{
	res.setHeader('x-no-compression',true)
	res.json(infoServices.dataOS())
}

module.exports ={
	info,infoDescompre

}