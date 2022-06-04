const $ = document

function onClickRound() {
    const numero = $.getElementById('numero').value
    const round = Math.round(numero)

    $.getElementById('resultado').innerHTML = round
}

function onClickTax() {
    const numero = parseFloat($.getElementById('cantidad').value)
    const valueTax = parseFloat($.getElementById('tax').value)
    const tax = numero * valueTax / 100
    const total = numero + tax

    $.getElementById('resultado_2').innerHTML = `El valor de su prducto es: ${numero} + IVA:${tax} = ${total}`
}
    
// conversion de pesos a dolares
function onClickDolar() {
    const pesos = parseFloat($.getElementById('pesos').value)
    const dolar = 0.0083
    const conversion = (pesos * dolar).toFixed(2)

    $.getElementById('resultado_3').innerHTML = `${pesos} pesos son ${conversion} dolares`
}


// conversion de dolares a pesos
function onClickPesos() {
    const dolar = parseFloat($.getElementById('dolar').value)
    const pesos = 120.61
    const conversion = (dolar * pesos).toFixed(2)

    $.getElementById('resultado_4').innerHTML = `${dolar} dolares son ${conversion} pesos`
}
