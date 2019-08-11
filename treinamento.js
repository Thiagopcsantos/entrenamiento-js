


// function Filho(){

//     this.name = "Maximo";
//     this.apellido = "Cavalcante";
//     this.edad = 3;
//     this.superHeroi = "Spiderman";

//     this.imprimirFilhote = function(){
//         return this.name + " " + this.apellido + " tiene "+ this.edad + " años, y cree ser el " + this.superHeroi;
//     } 

// }

// let maxi = new Filho("Maximo", "Cavalcante");



// console.log( maxi );

// console.log(maxi.imprimirFilhote());


function Jugador(nombre){
    this.nombre = nombre;
    this.puntosdevida = 100;
    this.special = 100;

    this.curar = function(jugadorPrincipal){

        if(this.special >= 20){
            this.special -20;
            jugadorPrincipal.puntosdevida += 10;
        }else{
            console.info(this.nombre + "No tiene Especial");
        }
        this.estado(jugadorPrincipal);
    }

    this.darUmTiro = function(jugadorPrincipal){
        if(jugadorPrincipal > 45){
            jugadorPrincipal.puntosdevida -= 45;
        }else{
            jugadorPrincipal.puntosdevida = 0;
            console.error( jugadorPrincipal.nombre + "Murrio ")
        }
        this.estado(jugadorPrincipal);
    }
    this.estado = function(jugadorPrincipal){
        console.info(this);
        console.info(jugadorPrincipal);
    } 
}

let papaleguas = new Jugador("Papaleguas");
let coiote = new Jugador ("Coiote");


console.log(papaleguas);
console.log(coiote);


papaleguas.curar(coiote);










