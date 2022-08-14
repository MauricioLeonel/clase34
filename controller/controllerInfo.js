const os = require('os')

const info = (req,res)=>{
	const data = {
		argumentos : process.argv.splice(2),
		plataforma : process.platform,
		versionNode : process.version,
		memoriatotal : process.memoryUsage().rss,
		rutaExect : process.execPath,
		IdProceso: process.pid,
		carpetaProyecto: process.cwd(),
		nucleos: os.cpus().length
	}
	console.log(data)
	res.json(data)

}

const infoDescompre = (req,res)=>{
	res.serHeader('x-no-compression',true)
	res.json({
		argumentos : process.argv.splice(2),
		plataforma : process.platform,
		versionNode : process.version,
		memoriatotal : process.memoryUsage().rss,
		rutaExect : process.execPath,
		IdProceso: process.pid,
		carpetaProyecto: process.cwd(),
		nucleos: os.cpus().length
	})

}



module.exports ={
	info,infoDescompre

}