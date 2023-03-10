
console.log("%c¡Ejercicio 4 !",
"background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");
console.log("Construir el algoritmo que solicite el nombre y edad de 3 personas y determine el nombre de la persona con mayor edad.");



function Edad(){
    
    let Nom1 = prompt(`Ingresa el nombre de la persona 1  `);
    let Edad1 = parseInt(prompt(`Ingresa la Edad de la persona 1   `));
    console.log(`Primera persona registrada "${Nom1}" con una edad de ${Edad1}`);
    let Nom2 = prompt(`Ingresa el nombre de la persona 2  `);
    let Edad2 = parseInt(prompt(`Ingresa la Edad de la persona 2   `));
    console.log(`Segunda persona registrada "${Nom2}" con una edad de ${Edad2}`);
    let Nom3 = prompt(`Ingresa el nombre de la persona 3  `);
    let Edad3 = parseInt(prompt(`Ingresa la Edad de la persona 3   `));
    console.log(`Tercera persona registrada "${Nom3}" con una edad de ${Edad3}`);


    edades = [Edad1, Edad2, Edad3]
    max = Math.max(...edades)
    switch(max){
        case Edad1 :
            console.log(`La persona ${Nom1} es la mayor del grupo con una edad de ${Edad1}`)
        break;
        case Edad2:
            console.log(`La persona ${Nom2} es la mayor del grupo con una edad de ${Edad2}`)
        break;
        case Edad3 :
            console.log(`La persona ${Nom3} es la mayor del grupo con una edad de ${Edad3}`)
        break;
    }
       
};

Edad();