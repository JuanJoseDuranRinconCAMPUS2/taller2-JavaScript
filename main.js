
console.log("%c¡Ejercicio 2 !",
"background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");
console.log("Dado un número indicar si es par o impar y si es mayor de 10.");


let num = parseInt(prompt("Ingrese el Numero  "));
let DV = num%2;

function par(){
    console.log("Numero ingresado")
    console.log(DV)
    console.log("Los resultados son los siguientes")
    switch (DV){
        case 0:
            console.log("El Numero Es Par :3")
        break;
        default:
            console.log("El Numero Es Impar :d")
        break;
    };
    if (num > 10){
        console.log("El Numero Es Mayor Que 10")
    } else{
        console.log("El Numero Es Menor Que 10")
    }
    return
};

par();