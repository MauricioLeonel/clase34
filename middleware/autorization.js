require('dotenv').config()

const KEY = process.env.KEY

const autorizationUser = (req,res,next)=>{
	if(req.session.username && req.cookies.KEY){
		 res.redirect('/principal')
	}else{
		next()
	}
}

module.exports = autorizationUser