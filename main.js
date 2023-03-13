
console.log("%c¡Ejercicio 8 !",
"background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");
console.log("Programa que Ingrese por teclado: a. el valor del lado de un cuadrado para mostrar por pantalla el perímetro del mismo b. la base y la altura de un rectángulo para mostrar el área del mismo");

function FacilisimoVerdad(){
    console.log("--------------Calculadora de Perimetro y Area--------------");
    let Operacion = prompt(`Si quieres calcular el Perimetro de un cuadrado digita "P" y Si quieres calcular el Area de un triangulo digita "A"`)
    if (Operacion == "P" || Operacion=="p"){
        console.log("--------------Sistema de calculo del Perimetro de un cuadrado--------------");
        let L = parseFloat(prompt("Ingresa el Valor del lado del cuadrado"));
        console.log(`-----------Realizando Operacion P=${L}*4cm--------------`);
        console.log(`Resultado: El perimetro es de ${L*4}cm`);
    }else if (Operacion == "A" || Operacion=="a") {
        console.log("--------------Sistema de calculo del Area de un Triangulo--------------");
        let B = parseFloat(prompt("Ingresa el Valor de la Base del Triangulo"));
        let H = parseFloat(prompt("Ingresa el Valor de la Altura del Triangulo"));
        console.log(`-----------Realizando Operacion A= (${B}*${H})/2cm--------------`);
        console.log(`Resultado: El Area es de ${(B*H)/2}cm3`);
    }else {
        console.log("ERROR datos no validos 404")
    }
}

FacilisimoVerdad()