
console.log("%c¡Ejercicio 9 !",
"background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");
console.log("N atletas han pasado a finales en salto triple en los juegos olímpicos femenio de 2022. Diseñe un programa que pida por teclado los nombres de cada atleta finalista y a su vez, sus marcas del salto en metros. Informar el nombre de la atleta campeona que se quede con la medalla de oro y si rompió récord, reportar el pago que será de 500 millones. El récord esta en 15,50 metros.");


function Bienvenida (){
    console.log("------------------------JuegosOlimpicosSoftware2022-------------------------");
    console.log("Hola!, Bienvenido al sistema de registro oficial de los juegos olimpicos");
    console.log("Soy Miraitowa y sere tu asistente virtual en esta ocasion :3");
}

let Nombres = [];
let Marcas = [];
var Alpha = 0;
function Atletas(){
    let i = 0
    do{
        console.log("Hola Por favor ingresa los datos de las finalistas")
        let Nom= prompt(`Ingrese el nombre de la finalista ${i+1}   `);
        let Mar = parseFloat(prompt(`Ingrese la Marca de la finalista ${i+1}   `));
        Nombres.push(Nom);
        Marcas.push(Mar);   
        BD = Nombres.concat(Marcas)
        for(i = 0; i < Marcas.length; i++){

            if (Marcas[i] > Alpha)
        
            {
        
                Alpha = Marcas[i];
        
            }
        
        }

    }while(confirm("¿Desea ingresar otra Finalista?"))
    console.log("A continuacion la informacion registrada")
    console.log(BD)
    let IndexMayor = Marcas.indexOf(Alpha); 
    console.log("--------------------CALCULANDO----------------------------");
    console.log(`La Finalista ganadora del Oro es ${Nombres[IndexMayor]} gracias a su marca de ${Marcas[IndexMayor]}mts. FELICIDADES`);
    if (Marcas[IndexMayor] > 15.50){
        console.log("INCREIBLE!, rompiste nuestro record anterior, recuerda reclamar tu pago de 500 millones por llegar tan lejos")
    }
        
}

Bienvenida()
Atletas()