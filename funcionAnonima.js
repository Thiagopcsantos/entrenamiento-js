function ejecutarFuncion ( fn ){
    if( fn() === 1){
        return true;
    }else{
        return false;
    }
};

console.log( 

    ejecutarFuncion(function(){
        console.log("funcion anonima ejecutada");
        return 1;
    })
);