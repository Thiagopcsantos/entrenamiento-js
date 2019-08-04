


function Filho(){

    this.name = "Maximo";
    this.apellido = "Cavalcante";
    this.edad = 3;
    this.superHeroi = "Spiderman";

    this.imprimirFilhote = function(){
        return this.name + " " + this.apellido + " tiene "+ this.edad + " años, y cree ser el " + this.superHeroi;
    } 

}

let maxi = new Filho("Maximo", "Cavalcante");



console.log( maxi );

console.log(maxi.imprimirFilhote());