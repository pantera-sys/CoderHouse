class store {
    constructor( nameStore,products, address, propietary) {
        this.nameStore = nameStore;
        this.products = products;
        this.address = address;
        this.propietary = propietary;
    }
}


let stores = []
const $ = document

function createShop() {
    const nameStore = $.getElementById('shop').value
    const address = $.getElementById('address').value
    const propietary = $.getElementById('propietary').value
    const products = $.getElementById('product').value

    
    if (!nameStore ) {
        console.log('y el nombre?')
    }
    else if (!address) {
        console.log('y la direccion?')
    }
    else if (!propietary) {
        console.log('y el propietario?')
    }
    else if (!products) {
        console.log('y los productos?')
    }
    else {
        const registeredStores = stores.map(stores => stores.nameStore)
        if (!registeredStores.includes(nameStore)) {
            const shop = new store(nameStore ,products, address, propietary)
            stores.push(shop)
            console.log(stores)
        }else{
            console.log('ya existe')
        }
    }   
}


function showInformation() {
    const information = $.getElementById('info')
    const datos = []
    
    stores.map(store => {
        const divContainer = $.createElement('div')
        divContainer.classList.add('container__info')

        const title = $.createElement('h2')
        title.textContent = store.nameStore

        const button = $.createElement('button')
        button.textContent = 'Ver productos'
        button.addEventListener('click', () => {
            showProducts(store)
        })

        const div1 = $.createElement('div')
        div1.classList.add('container__store')
        div1.append(title, button)

        const div2 = $.createElement('div')
        div2.id = 'infoProducts'

        divContainer.append(div1, div2)
        datos.push(divContainer)
    })
    information.innerHTML = ''
    information.append(...datos)
    console.log(datos)
    console.log(stores)

    
}

function showProducts({products, propietary, address, }) {
    const infoProducts = $.getElementById('infoProducts')
    const divContainer = $.createElement('div')
    divContainer.classList.add('container-info-products')

    const elements = `
        <div class="container_elements">
            <p>Producto: </p><span>${products}</span>
        </div>
        <div class="container_elements">
            <p>Propietario: </p><span>${propietary}</span>
        </div>
        <div class="container_elements">
            <p>Direccion: </p><span>${address}</span>
        </div>
    `
    infoProducts.innerHTML = elements
}

function displayProductsInformation(obj) {
    const infoProducts = $.getElementById('infoProducts')
    const divContainer = $.createElement('div')
    divContainer.classList.add('container-info-products')

    const elements = `
        <div class="container_elements">
            <p>Producto: </p><span>${obj.name}</span>
        </div>
        <div class="container_elements">
            <p>Precio: </p><span>${obj.price}</span>
        </div>
        <div class="container_elements">
            <p>Cantidad: </p><span>${obj.amaount}</span>
        </div>
        
    `
    infoProducts.innerHTML = elements
}

function filter() {
    const search = $.getElementById('search').value
    const select = $.getElementById('select').value
    const filtered = bisuteria.filter((obj) => {
      const filter = obj[select].includes(search)
      return filter;
    })

   console.log(filtered)
  displayProductsInformation(filtered[0])
   
}



const btnShop = $.getElementById('btnShop')
const btnShow = $.getElementById('btnShow')
const btnFilter = $.getElementById('btnFilter')


btnShow.addEventListener('click', showInformation)
btnShop.addEventListener('click', createShop)
btnFilter.addEventListener('click', filter)


// function filter() {
//     const search = $.getElementById('search').value
//     const select = $.getElementById('select').value
//     let filtered = []

//     switch (select) {
//         case 'product':
//             filtered = bisuteria.filter( ({name}) => name.includes(search))
//             break;
//         case 'price':
//             filtered = bisuteria.filter( ({price}) => price.includes(search))
//             break;  
//         case 'availability':
//             filtered = bisuteria.filter( ({availability}) => availability.includes(search))
//             break;
//         case 'amaount':
//             filtered = bisuteria.filter( ({amaount}) => amaount.includes(search))
//             break;
//         case 'features':
//             filtered = bisuteria.filter( ({features}) => features.includes(search))
//             break;
//         default:
//             console.log('no seleccionaste nada');
//             break;
//     }
// }