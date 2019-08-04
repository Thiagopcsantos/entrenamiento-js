
//let a = 30;

/*function primeraFuncion(){
    let a = 20
    console.log(a);
}

primeraFuncion()*/


/*function imprimir(nombre, apellido){

    apellido = apellido || "xxx";
    if ( apellido === undefined){
        apellido= "xxx";
    }

    console.log(nombre + " " + apellido);
}

imprimir("Valentina", "Lamas");*/


/*function imprimir( persona ){
    console.log( persona.nombre + " " + persona.apellido);
}

let obj = {
    nombre:"Maximo",
    apellido:"Cavalcante"
}

//imprimir(obj);

imprimir( {
     nombre: "Valentina",
     apellido: "Cavalcante"
});*/



function imprimir ( fn ){
    fn();

}
let persona = {
    nombre: "Maximo",
    apellido:"Cavalcante"
}

let miFuncion = function(){
    console.log("miFuncion");
}

imprimir(miFuncion);