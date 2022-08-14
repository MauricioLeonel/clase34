
const productosData = document.getElementById('productosData')
const dataFetch = async()=>{
	const data  = await fetch('http://localhost:8080/api/productosGet')
	const result = await data.json()
	const resultReverse = result.reverse()
	return resultReverse

}
dataFetch().then(e=>{
	e.map(i=>{
		productosData.innerHTML+=`<div>
			<span>nombre ${i.title}</span>
			<span>nombre ${i.price}</span>
			<span>nombre ${i.thumbnail}</span>
		</div>`
	})
})

