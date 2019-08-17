



let arr = [
    true,
    {
        nombre: "Maximo",
        apellido:"Cavalcante"
    },
    function(){
        console.log("Esta viviendo en un array.")
    },
    function (persona){
        console.log(persona.nombre + " " + persona.apellido );
    },
    ["Vale", "MAxi", 2, "puppy" ]
];

console.log(arr);
console.log(arr[0]);
console.log(arr.length);
console.log(arr[1].nombre +" "+ arr[1].apellido);

arr[2]();
arr[3](arr[1]);

console.log(arr[4][1]);


let arreglo2 = arr[4][1];
arreglo2[3] = "Lamas";

console.log(arr);