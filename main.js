
console.log("%c¡Ejercicio 5 !",
"background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");
console.log("Construir el algoritmo que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario, informar el producto y la división del primero respecto al segundo.");



function algoritmo(){
    let num1 = parseInt(prompt("Ingresa el Numero 1   "))
    let num2 = parseInt(prompt("Ingresa el Numero 2   "))
    let menor = num1 < num2
    switch(menor){
        case true:
            console.log(`EL numero ${num1} es menor que ${num2}`)
            console.log("A continuacion se realizara la suma y diferencia de los numeros")
            console.log("----------------------Realizando operacion-------------------------")
            console.log(`La suma de num1 + num2 da como resultado ${num1 + num2}`)
            console.log(`La resta de num1 - num2 da como resultado ${num1 - num2}`)
        break;
        case false:
            console.log(`EL numero ${num1} es mayor que ${num2}`)
            console.log("A continuacion se realizara la multiplicacion y division de los numeros")
            console.log("----------------------Realizando operacion-------------------------")
            console.log(`La suma de num1 + num2 da como resultado ${num1 * num2}`)
            console.log(`La resta de num1 - num2 da como resultado ${num1 / num2}`)
        break;
    }

};

algoritmo()