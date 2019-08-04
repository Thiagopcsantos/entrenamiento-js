


function Persona(){

    this.nombre= 'Maxi';
    this.apellido = 'Cavalcante';
    this.edad = 3;

    this.imprimirPersona = function(){
        return this.nombre + " " + this.apellido + " " + this.edad;
    }

}


let maxi = new Persona();


console.log(maxi);
console.log( maxi.nombre);
console.log(maxi.imprimirPersona());