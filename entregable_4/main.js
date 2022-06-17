const data =[
    {
        name : 'Pulsera',
        price : '$100',
        amaount : '10',
    },
    {
        name : 'Collar',
        price : '$125',
        amaount : '25',
    },
    {
        name : 'Anillos',
        price : '$200',
        amaount : '50',
    },
    {
        name : 'Aretes',
        price : '$150',
        amaount : '30',
    }

]
const $ = document

function showProducts(){
    const div = $.getElementById('App')
    div.innerHTML = ''
    data.forEach(product => {
        div.innerHTML += `
            <div class="product">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <p>${product.amaount}</p>
            </div>
        `
    })
}

function showForm() {
    const div = $.getElementById('App')
    div.innerHTML = ''
    div.innerHTML =
    `
    <div class="form">
        <h3>Agregar Producto</h3>
        <form>
        <div class="container-input">
            <label for="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Nombre">
        </div>
        <div class="container-input">
            <label for="price">Precio</label>
            <input type="text" id="price" name="price" placeholder="Precio">
        </div>
        <div class="container-input">
            <label for="amount">Cantidad</label>
            <input type="text" id="amount" name="amount" placeholder="Cantidad">
        </div>
            <button  id="submit" class='button__send'>Agregar</button>
        </form>
    </div>
    ` 
    const buttonAdd = $.getElementById('submit')
    buttonAdd.addEventListener('click', function(e){
    e.preventDefault()
    const name = $.getElementById('name').value
    const price = $.getElementById('price').value
    const amount = $.getElementById('amount').value
    data.push({
        name : name,
        price : `$${price}`,
        amaount : amount,
    })
    }
    )
}





const buttonDisplay = $.getElementById('display');
buttonDisplay.addEventListener('click',  showProducts )

const buttonForm = $.getElementById('displayForm');
buttonForm.addEventListener('click',  showForm )