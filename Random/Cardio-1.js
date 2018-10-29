// REVERSE STRING

/* ================== Method A ================== */

function reverseStringA(str) {
    return str.split('').reverse().join('');
}

const reverseA = reverseStringA('bayo');

console.log(`reverse string is "${reverseA}"`);

/* ================== Method B ================== */

function reverseStringB(str) {
    let revString ='';
    for(let i = 0; i <= str.length - 1; i++) {
        revString = str[i] + revString; // revString + str[i] will not reverse string accordingly
    }
    return revString;
}

const reverseB = reverseStringB('hello');

console.log(`reverse string is "${reverseB}"`);

/* ================== Method C ================== */

function reverseStringC(str) {
    let revString ='';
    for(let i of str) {
        revString = i + revString;
    }
    return revString;
}

const reverseC = reverseStringC('common');

console.log(`reverse string is "${reverseC}"`);

/* ================== Method D ================== */

function reverseStringD(str) {
    let revString = ''
    str.split('').forEach( (i) => {
        revString = i + revString;
    })
    return revString;
}

const reverseD = reverseStringD('nigeria');

console.log(`reverse string is "${reverseD}"`);

/* ================== Method E ================== */

function reverseStringE(str) {
    return str.split('').reduce( (revString, i) => i + revString, '');
}

const reverseE = reverseStringE('former');

console.log(`reverse string is "${reverseE}"`);



// PALINDROME

function palindrome(str) {
    let revString = str.split('').reverse().join('');
    if (revString === str) { return "palindrome";}
    else { return "not a palindrome";}
}

let palin = palindrome("racecar");
console.log(`${palin}`);



// REVERSE AN INTEGER
function reverseInt(int) {
    const revInt = int.toString().split('').reverse().join('');

    return parseInt(revInt) * Math.sign(int);
}

let revInteger = reverseInt(-56789);
console.log(`${revInteger}`);



// CAPITALIZE LETTERS

/* ================== Method A ================== */
function capLettersA(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map( word => word[0].toUpperCase() + word.substr(1))
        .join(' ');
}

let capA = capLettersA('I love JavaScrpt');
console.log(`${capA}`);

/* ================== Method B ================== */

function capLettersB(str) {
    const strArr = str.toLowerCase().split(' ');

    for(let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1);
    }
    return strArr.join(' ');
}

let capB = capLettersB('I love Python');
console.log(`${capB}`);

