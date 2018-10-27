// REVERSE STRING

function reverseString(str) {
    return str.split('').reverse().join('');
}

const reverse = reverseString('bayo');

console.log(`reverse string is "${reverse}"`);