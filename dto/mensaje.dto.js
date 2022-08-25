class mensajeDTO {
	constructor(data){
		this.autor = {
			email:data.email,
			nombre:data.nombre,
			apellido:data.apellido,
			edad:data.edad,
			alias:data.alias,
			avatar:data.avatar,
		}
		this.texto = data.texto
		this.fecha = data.fecha
	}
}

module.exports = mensajeDTO