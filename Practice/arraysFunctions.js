`use strict`

let arr1 = ['a', 'b', 'c', 'd', 1, 2, 3, 4];

console.log(arr1.concat(['z']));

console.log(arr1.join('~'));

console.log(arr1.slice(2)); // removes first two elements

console.log(arr1.indexOf(1)); // locates zero-index

console.log(arr1.lastIndexOf('c')); // locates last zero-index of target