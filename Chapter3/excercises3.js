console.log(Math.min(2, 4));
console.log(Math.min(0, 7, 3));

function isEven(n) {
    if (n === 0) {
        return true
    }
    else if (n === 1) {
        return false
    }
    else {
        return isEven(n - 2)
    }
};
console.log(isEven(1));

function isOdd(n) {
    if (n === 0) {
        return false
    }
    else if (n === 1) {
        return true
    }
    else {
        return 'Does this work??'
    }
}
console.log(isOdd(17));

// function countBs(string) {
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === 'B') {
//             count++;
//         }
//     }
//     return count;
// }

let countBs = function (string) {
    return countChar(string, 'b')
}

function countChar(string, character) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            count++;
        }
    }
    return count;
}
console.log(countBs('BbBBBbbbbBbBBBBBBBBBBWb'));