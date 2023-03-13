
console.log("%c¡Ejercicio 10 !",
"background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");
console.log("Desarrolle un programa cíclico que capture un dato numérico cada vez, y los vaya acumulando. El programa se detiene cuando el usuario digita un cero. El programa debe mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR VALOR Y MENOR VALOR.");

numeros = [];
const Alpha = 0
function ciclo(){
    while(num != 0){
        var num = parseInt(prompt("Ingresa un numero")) ;
        if (num != 0){
            numeros.push(num);
        }
    }
    console.log("---------------Reconociendo Numeros------------------")
    console.log(`Numeros Ingresados: ${numeros}`)
    SumaTotal = numeros.reduce((accumulator, currentValue) => accumulator + currentValue, Alpha);
    TotalV = numeros.length
    Promedio = SumaTotal / (TotalV);
    console.log(`La suma de todos los valores es:  ${SumaTotal}`)
    console.log(`El promedio de los valores ingresados es: ${Promedio}`)
    console.log(`El Dato mayor es: ${Math.max(...numeros)}`)
    console.log(`El Dato menor es: ${Math.min(...numeros)}`)

}
ciclo()