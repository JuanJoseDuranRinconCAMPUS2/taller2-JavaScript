
console.log("%c¡Ejercicio 3 !",
"background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");
console.log("Construir el algoritmo para determinar el voltaje de un circuito a partir de la resistencia y la intensidad de corriente.");


let I = parseInt(prompt("Ingrese el Valor de la Intencidad de la Corriente  "));
let R = parseInt(prompt("Ingrese el Valor de la Resistencia  "));


function Voltaje(){
    console.log("Intencidad Ingresada")
    console.log(I)
    console.log("Resistencia Ingresada")
    console.log(R)
    console.log("-----------------Calculando----------------")
    let V = I * R
    console.log(`Segun la intencidad registrada de  ${I} y la resistencia registrada de ${R} se determina el valor del Voltaje de ${V}`)
};

Voltaje();