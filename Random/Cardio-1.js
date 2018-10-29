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


