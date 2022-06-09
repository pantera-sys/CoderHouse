class store {
    constructor( products, address, propietary) {
        
        this.products = products;
        this.address = address;
        this.propietary = propietary;
    }
}



const $ = document

function createShop() {
    const nameStore = $.getElementById('shop').value
    const address = $.getElementById('address').value
    const propietary = $.getElementById('propietary').value
    const products = $.getElementById('product').value

    let tiendas = []
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
        const names = tiendas?.map(tiendas => console.log(tiendas))
        console.log(names)
        if (nameStore.includes(names)) {
            const shop = new store(products, address, propietary)
            tiendas.push(shop)
            console.log(tiendas)
        }else{
            console.log('ya existe')
        }
    }   
}



// function showInformation() {
//     const informacion = $.getElementById('info')
//     const datos = []
//     tiendas.map(function(tienda) {
//         tienda.map(function(info) {
//             datos.push(`<h3>${info.nameStore}</h3>
//             <p>${info.address}</p>
//             <p>${info.propietary}</p>
//             <p>${info.products}</p>`)
//         }
//     )
//     }
//     )
//     informacion.innerHTML = [...datos]
// }

const btnShop = $.getElementById('btnShop')
// const btnShow = $.getElementById('btnShow')

// btnShow.addEventListener('click', showInformation)
btnShop.addEventListener('click', createShop)


// const nameStores = Object.keys(tiendas)
        // if (!nameStores.includes(nameStore)) {
        //     console.log('exito ')
        //     tiendas[nameStore] = new store(products, address, propietary)
        // }else {
        //     console.log('ya existe')
        // }