const socket = io.connect();


const username = document.getElementById('username')
const email = document.getElementById('email')
email.value = document.cookie.split('=')[1]
username.innerHTML = document.cookie.split('=')[1]


const envioFormuChat= function(e){
	e.preventDefault()
	e.stopPropagation()
	const data = {
		autor:{
			email:e.target.email.value,
			nombre:e.target.nombre.value,
			apellido:'prueba',
			edad:20,
			alias:'prueba',
			avatar:'ruebaavatar',
		},
		texto: e.target.mensaje.value,
		fecha:new Date(Date.now())
	}

	socket.emit('mensajeChat',data)
}

document.getElementById('formuChat').addEventListener('submit',(e)=>{envioFormuChat(e)})


const envioMensaje = (data)=>{
	document.getElementById('compresion').innerHTML = ''
	document.getElementById('compresion').innerHTML = `${data.comprimido}%`
	document.getElementById('chatContenedor').innerHTML = ''
	data.result.map(e=>{
		const dataMostar = data.entities.mensajes[e]
		document.getElementById('chatContenedor').innerHTML +=`<span class="email">${dataMostar.autor}</span> [<span class="fecha">${dataMostar.fecha}</span>]: <span class="mensaje">${dataMostar.texto}</span> </br>` 
	})
}


socket.on('mensajesChat',envioMensaje)

// const envioData = async (data)=>{
// 	const template = await fetch(data.dir)
// 	const text = await template.text()
// 	const templateRender = Handlebars.compile(text);
// 	const html = templateRender({ data:data.elementos })
// 	document.getElementById('elementosRender').innerHTML = html
// }


// const envioFormu = function(e){
// 	e.preventDefault()
// 	e.stopPropagation()
// 	const {title,price,thumbnail} =e.target
// 	socket.emit('envio',{title:title.value,price:price.value,thumbnail:thumbnail.value})

// }
// socket.on('agrego',envioData)
