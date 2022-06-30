const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll = () => {
	const anchoFondo = (window.pageYOffset / altura) * 700;
	if(anchoFondo <= 100){
		fondo.style.width = anchoFondo + '%';
	}
}

const $ = document
const App = $.getElementById('App')
let carProducts = []

function displayProductsInformation(obj) {
	console.log(obj)
    App.innerHTML = ''
    obj.map(({source, description, price}) => {
		
        App.innerHTML += `
        <div class="col " >
		<div class="card shadow-sm" > 
			<img id="imagen1" src=${source} class="bd-placeholder-img card-img-top izquierda" width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" ><rect width="100%" height="100%" fill="#55595c"/></img>
			<div class="card-body">
			<p class="card-text">${description}</p>
			<div class="d-flex justify-content-between align-items-center">
				<div class="btn-group">
				<button id='buy' type="button" class="btn btn-sm btn-outline-primary">Add to cart</button>
				</div>
				<small class="fw-bold">${price}</small>
			</div>
			</div>
		</div>
		</div>
    `
    })

	const buy = document.getElementById('buy')
	buy.onclick = () => {
		console.log('click')
		const product = {
			source,
			description,
			price
		}
		console.log(product)
	}

}

const input1 = $.getElementById('name')
input1.onkeyup =  () => {
	const value = input1.value
	// console.log(input1.value);
    const filtered = infoCards.filter((obj) => {
      const filter = obj.name.includes(value)
	  return filter;
      })  
	  console.log(filtered, 'filtrado');
    displayProductsInformation(filtered)
}

