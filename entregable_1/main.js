let many = prompt('Cuanto numeros desea ingresar')
let pair = 0
let odd = 0

for(i = 0; i < many; i++){
  let number = prompt(`ingrese su numero # ${i+1}`)
  if (number  % 2 == 0){
   pair++ 
  }else{
    odd++
  }
}

alert(`la cantidad de numeros par es ${pair}`)
alert(`la cantidad de numeros impar es ${odd}`)

function onClickAge() {

    let age = document.getElementById("age").value
    

    if(age > 18){
        document.write("<p>usted es mayor de edad</p>")
    }else{
        document.write("<p>usted es menor de edad</p>")
    }
}