
console.log("%c¡Ejercicio 6 !",
"background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");
console.log("Construir el algoritmo en Javascript para un programa para cualquier cantidad de estudiantes que lea el nombre, el sexo y la nota definitiva y halle al estudiante con la mayor nota y al estudiante con la menor nota y cuantos eran hombres y cuantos mujeres.");

let Nombres = [];
let Sexo = [];
let Notas = [];
var Alpha = 0;
function definitiva(){
    do{
        console.log("Hola Por favor ingresa los datos de tus estudiantes")
        let Nom= prompt("Ingrese el nombre del estudiante    ");
        let Genero = prompt("Ingrese el Sexo del estudiante (M o F)    ");
        let Nota = parseFloat(prompt("Ingresa la Calificacion final del estudiante  "));
        Nombres.push(Nom)
        Sexo.push(Genero)
        Notas.push(Nota)   
        BD = Nombres.concat(Sexo, Notas)
        for(i = 0; i < Notas.length; i++){

            if (Notas[i] > Alpha)
        
            {
        
                Alpha = Notas[i];
        
            }
        
        }

    }while(confirm("¿Desea ingresar otro estudiante?"))
    console.log("A continuacion la informacion registrada")
    console.log(BD)
    let IndexMayor = Notas.indexOf(Alpha); 
    console.log("--------------------CALCULANDO----------------------------");
    console.log("Resultados");
    if (Sexo[IndexMayor] == "M" || Sexo[IndexMayor] == "m"){
        console.log(`El Estudiante ${Nombres[IndexMayor]} de genero registrado de ${Sexo[IndexMayor]} es el estudiante con mayor nota con una calificacion final de ${Notas[IndexMayor]}`);
    }else{
        console.log(`la Estudiante ${Nombres[IndexMayor]} de genero registrado de ${Sexo[IndexMayor]} es la estudiante con mayor nota con una calificacion final de ${Notas[IndexMayor]}`);
    }
        
}

definitiva()


