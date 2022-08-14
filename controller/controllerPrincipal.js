const path = require('path')
require('dotenv').config()

const KEY = process.env.KEY

const inicio = (req,res)=>{
	res.redirect('/principal')
}
const principal =(req,res)=>{
	if(req.session.username && req.cookies[KEY] ){
		res.sendFile(path.join(__dirname,'../public/principal.html'))
	}else{
		res.redirect('/login')
	}
}

const loginGet = (req,res)=>{
	res.sendFile(path.join(__dirname,'../public/login.html'))
}

const loginPost = (req,res)=>{
	req.session.username = req.body.username
	res.cookie('username',req.session.username).redirect('/principal')
}

const registerGet = (req,res)=>{
	res.sendFile(path.join(__dirname,'../public/register.html'))
}

const logoutPost = (req,res)=>{
	req.session.destroy(e=>{
		if(e){
			return res.send('hubo un error')
		}
	})
	res.sendFile(path.join(__dirname,'../public/logout.html'))
}

const registerPost = (req,res)=>{
	res.redirect('/login')
}
const failedRegister = (req,res)=>{
	res.sendFile(path.join(__dirname,'../public/failregister.html'))
}
const failedLogin = (req,res)=>{
	res.sendFile(path.join(__dirname,'../public/faillogin.html'))
}

module.exports ={
inicio,
principal,
loginGet,
registerGet,
logoutPost,
registerPost,
failedRegister,
loginPost,
failedLogin
}