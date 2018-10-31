// LONGEST WORD

function longestWord(word) {
    const wordArr = word.toLowerCase().match(/[a-z0-9]+/g);

    const sorted = wordArr.sort((a,b) => b.length - a.length);

    const longestWordArr = sorted.filter( word => word.length === sorted[0].length);

    if (longestWordArr ===1){
        return longestWordArr[0];
    } else {
        return longestWordArr;
    }
}

const findLongest = longestWord('my name is adebayo');

console.log(`longest word is "${findLongest}"`);


// ARRAY CHUNKING

/* ================ Method A ==================== */

function chunkArrayA(arr, len) {
    let chunkedArr = [];

    let i = 0;

    while(i < arr.length) {
        chunkedArr.push(arr.slice(i, i+len));
        i += len;
    }
    return chunkedArr;
}

let chunksA = chunkArrayA([1, 5, 7, 9, 2, 3, 4, 0, 6], 2);

console.log('chunkA is ', chunksA); //don't log in ES6 string literal

/* ================ Method B ==================== */

function chunkArrayB(arr, len) {
    const chunkedArr = [];

    arr.forEach(val => {
        const last = chunkedArr[chunkedArr.length - 1]
        
        if(!last || last.length === len) {
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
    });

    return chunkedArr;
}

let chunksB = chunkArrayB([6, 1, 7, 9, 2, 3, 4, 0, 6, 8], 2);

console.log('chunksB is', chunksB);

//  FLATTEN ARRAY

/* ================ Method A ==================== */

function flattenArrayA(arrays) {
    return arrays.reduce( (a,b) => {
        return a.concat(b);
    });
}

let flatA = flattenArrayA([[5, 4], [1, 2], [7, 3], [4, 0], [6, 8]]);

console.log('Flattened Array A is', flatA);

/* ================ Method B ==================== */

function flattenArrayB(arrays) {
    return [].concat.apply([],arrays);
}

let flatB = flattenArrayB([[8, 4], [2, 2], [3, 12], [4, 0], [6, 8]]);

console.log('Flattened Array B is', flatB);

/* ================ Method C ==================== */

function flattenArrayC(arrays) {
    return [].concat(...arrays);
}

let flatC = flattenArrayC([[1, 3], [2, 27], [3, 12], [4, 5], [6]]);

console.log('Flattened Array C is', flatC);


//  ANAGRAM

function isAnagram(strA, strB) {
    return formatStr(strA) === formatStr(strB);
}

function formatStr(str) {
    return str
            .replace(/[^\w]/g, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('')
}

let anagram = isAnagram('Dormitory', 'dirty room');

console.log('Anagram is', anagram);



//  LETTER CHANGES

function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
        if(char === 'z' || char === 'Z') { return 'a'; }
        else { return String.fromCharCode(char.charCodeAt() + 1); }
    });

    newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());

    return newStr;
}


const letter = letterChanges('hello you')

console.log('Letter change is ', letter);


/* Credit to Brad Traversy */