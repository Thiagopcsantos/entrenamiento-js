

function Persona(){
    this.nombre = "Maximo";
    this.apellido = "Cavalcante";
    this.edad = 03;
    this.pais = "Brasil";
}

Persona.prototype.imprimirInfo = function(){
    console.log(this.nombre + " " + this.apellido + "("+ this.edad + ")");

}

let max = new Persona();


Number.prototype.esPositivo = function(){
    if( this > 0){
        return true;
    }else{
        return false;
    }
}
