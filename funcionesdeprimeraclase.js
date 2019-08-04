
let persona = {
    nombre: 'Valentina',
    apellido: 'Lamas',
    imprimirNombre: function(){

        console.log(this.nombre + " "+ this.apellido);
    },
    direccion:{
        pais: 'Jamaica',
        obtenerPais: function(){
            
            let self = this;

            let nuevaDireccion =function(){
                console.log(self);
                console.log("La direccion es en "+ self.pais);
            }
            nuevaDireccion();
        }
    }
}

persona.imprimirNombre();
persona.direccion.obtenerPais();