



let arr = [
    true,
    {
        nombre: "Maximo",
        apellido:"Cavalcante"
    },
    function(){
        console.log("Esta viviendo en un array.")
    }
];

console.log(arr);
console.log(arr[0]);
console.log(arr.length);
console.log(arr[1].nombre +" "+ arr[1].apellido);
arr[2]();
