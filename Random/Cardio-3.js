// ADD ALL NUMBERS

/* ================ Method A ==================== */
function addAllA() {
    var args = Array.prototype.slice.call(arguments);
    var sum = 0;
    for (i= 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

console.log("Add All method A: ", addAllA(5, 5, 7, 6));

/* ================ Method B ==================== */
function addAllB(...nums) {
    let sum = 0;
    nums.forEach(num => (sum += num));
    return sum;

    /* return nums.reduce((acc, curr) => acc + curr); */
}

console.log("Add All method B: ", addAllB(7, 2, 7, 6));


// SUM ALL PRIMES

function sumAllPrimes(num) {
    let sum = 0;

    function checkIfPrime(i) {
        for(let j = 2; j < i; j++) {
            if(i % j === 0) {
                return false;
            }
        }
        return true;
    }

    for (let i= 2; i <= num; i++) {
        if (checkIfPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

console.log("Sum of all primes is: ", sumAllPrimes(20));


// SEEK AND DESTROY

/* ================ Method A ==================== */
function seekAndDestroyA(arr) {
    const args = Array.from(arguments);

    function filterArr(arr) {
        // Return true if not in array
        return args.indexOf(arr) === -1;
    }

    return arr.filter(filterArr);
}

console.log("Seek and Destroy method A: ", seekAndDestroyA([4, 5, 8, 2, 9, 'Stan Lee'], 4, 8));

/* ================ Method B ==================== */
function seekAndDestroyB(arr, ...rest) {
    return arr.filter(val => !rest.includes(val));
}

console.log("Seek and Destroy method B: ", seekAndDestroyB([4, 5, 8, 2, 9, 'Stan Lee'], 4, 8));


// SORT BY HEIGHT

function sortByHeight(arr) {
    const arr1 = [];
    const arr2 = [];

    arr.forEach((val, i) => val === -1 ? arr1.push(i) : arr2.push(val));
    
    const sortArr = arr2.sort((a,b) => a - b);

    arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

    return sortArr;

}

console.log("Sort by Height: ", sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));


// MISSING LETTER: Finds just 

function missingLetter(str) {
    let compare = str.charCodeAt(0); // a = 97, b = 98, ...
    let missing;

    str.split('').map((char, i) => {
        if(str.charCodeAt(i) === compare) {
            ++compare;
        } else {
            missing = String.fromCharCode(compare);
        }
    });
    return missing;
}

console.log("Missing Letter: ", missingLetter('abce'));


// SORT BY HEIGHT

function evenOddSums(arr) {
    let evenSum = 0;
    let oddSum = 0;

    arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)) );

    return [evenSum, oddSum];
}

console.log("Even and Odd Sum: ", evenOddSums([50, 60, 40, 73, 71]));


/* Credit to Brad Traversy */