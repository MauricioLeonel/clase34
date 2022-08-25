const os = require('os')

class Info {
	dataOS = ()=>{
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
		return data
	}



}

module.exports = new Info