
console.log("%c¡Ejercicio 7 !",
"background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");
console.log("Programa que pida el ingreso del nombre y precio de un artículo y la cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador en su factura.");

function facturacion(){
    let Nombre = prompt("Ingresa Tu nombre:   ");
    let ID = prompt("Ingresa Tu identificación:   ");
    let NA = prompt("Ingresa el Nombre del Artículo:   ");
    let PA = parseInt(prompt("Ingresa el Precio del Articulo: COP$"));
    let CA= parseInt(prompt("Ingresa la Cantidad de artículos comprados:   "));
    function random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }
    Total = CA * PA;
    console.log("--------------GENERANDOFACTURA--------------");
    console.log(`\t TIENDA ORIGINAL  NIT: 2344234234 \n \t Tienda Sur TEL: ########## \n \t Comprador: ${Nombre} \n \t CC: ${ID} \n \tCODIGO----DESCRIPCION----UNIDADES----VALOR`);
    console.log(`\t ${random(1000,10000)}      ${NA}      ${CA}      ${PA}`);
    console.log("\t--------------TOTAL--------------");
    console.log(`\t Total a pagar      COP$${Total}`)

}

facturacion()