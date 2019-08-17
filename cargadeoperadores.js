


function crearProducto(nombre, precio){
    nombre = nombre || "sin nombre";
    precio = precio || 0;

    console.log("producto: ", nombre, "Precio: ", precio);
}
function crearProducto1(nombre){
    crearProducto(nombre,124);
}


crearProducto("Desodorante");
crearProducto1("Carro");














