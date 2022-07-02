const $ = document
const App = $.getElementById('App')

function displayProductsInformation(obj) {
    App.innerHTML = ''
    obj.map(({name, price, amaount}) => {
        App.innerHTML += `
        <section class="container__info-products">
            <div class="container_elements">
                <p>Producto: </p><span>${name}</span>
            </div>
            <div class="container_elements">
                <p>Precio: </p><span>${price}</span>
            </div>
            <div class="container_elements">
                <p>Cantidad: </p><span>${amaount}</span>
            </div>
        </section>
    `
    })
   
    const btncls = $.createElement('button')
    btncls.textContent = 'limpiar'
    btncls.addEventListener('click', () => {
        App.innerHTML = ''
    })
    App.appendChild(btncls)
}

const input1 = $.getElementById('name')
input1.onkeyup =  () => {
    const value = input1.value
    if (!(value.length === 0)) {
        const filtered = bisuteria.filter((obj) => {
            const filter = obj.name.includes(value)
            return filter;
          })
      
          displayProductsInformation(filtered)
    } else {
        App.innerHTML=``
    }

    
}


