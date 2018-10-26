// REVERSE STRING

function reverseString(str) {
    return str.split('').reverse().join('');
}

const result = reverseString('bayo');

console.log(`${result}`);