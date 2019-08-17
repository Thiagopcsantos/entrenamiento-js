



function miFuncion(a,b,c,d){
    // console.log(arguments);

    if(arguments.length !== 4){
        console.error("la funcion necesita 4 parametros");
        return;
    }
    console.log( a + b + c + d);
}


miFuncion(10,20,10,40);