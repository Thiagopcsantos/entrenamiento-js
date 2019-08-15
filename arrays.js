

let arr = [1,2,3,4,5];

console.log(arr);

console.log ( arr[0]);

console.log( arr[3]);

arr.reverse();
console.log(arr);


arr = arr.map(function(elem){
    elem *= elem;
    return elem;
});

console.log(arr);


arr = arr.map(Math.sqrt);
console.log(arr);


// arr = arr.join();
// console.log(arr);


// arr = arr.split();
// console.log(arr);



arr.reverse();
console.log(arr);

arr.push(6, 7,8);
console.log(arr);

arr.unshift(0);
console.log(arr);


console.log(arr.toString() );


let elimine = arr.pop();
console.log( arr, elimine);

arr.splice( 1, 2, 22, 33);
console.log(arr);



arr = arr.slice(0,5);
 console.log(arr);




