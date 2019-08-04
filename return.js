

// function obtenerAleatorio(){
//     return Math.random();
// }


// function obtenerNombre(){
//     return "Maximo";
// }


// //console.log( obtenerNombre() + " Cavalcante");



// function esMayor05(){

//     if ( ontenerAleatorio() > 0.5){
//         return true;
//     }else{
//         return false;
//     }
// }
//console.log(esMayor05 ()) ;

// if (esMayor05 ()) {
//     console.log("es mayor a 0.5");
// }else{
//     console.log("es menos a 0.5");
// }


function crearPersona( nombre, apellido){

    return {
        nombre: nombre,
        apellido: apellido
    }
}

let persona = crearPersona("Maximo", "Cavalcante");
// console.log(persona.nombre);
// console.log(persona.apellido);


function crearFuncion(){
    return function(apellido){
        console.log("Me Crearon!! soy yo " + apellido);
        
        return function(){
            console.log("segunda funcion");
        }
    }    
}
let nuevaFuncion = crearFuncion();
let segundaFuncion = nuevaFuncion( persona.apellido);

segundaFuncion();



