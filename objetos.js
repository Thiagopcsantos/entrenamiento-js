
let persona = {
    nombre: "Valentina",
    apellido:"Lamas",
    edad: 32,
    direccion:{
        pais:"Chile",
        ciudad:"santiago",
        edificio:{
            nombre: "edificion los Barbechos",
            telefono: "33413874"
        }
    }
};


console.log(persona.direccion.pais);

// para add un valor al objeto 

persona.direccion.zipcode = 11122121;

console.log(persona.direccion);



let edificio = persona.direccion.edificio;

edificio.nopiso = "8vo piso";


console.log(persona);
