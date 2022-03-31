// let square = function (x) {
//     return x * x;
// };
// console.log(square(8));

// let makeNoise = function () {
//     console.log("Ping!");
// };
// makeNoise();

// let power = function (base, exponent) {
//     let result = 1;
//     for (let count = 0; count < exponent; count += 1) {
//         result *= base;
//     }
//     return result;
// };
// console.log(power(2, 10))


// let halve = function (n) {
//     return n / 2;
// };
// let n = 10;
// console.log(halve(100));
// console.log(n);

// let hummas = function (factor) {
//     let ingredient = function (amount, unit, name) {
//         let ingredientAmount = amount * factor;
//         if (ingredientAmount > 1) {
//             unit += 'S';
//         }
//         console.log(`${ingredientAmount} ${unit} ${name}`);
//     };
//     ingredient('1', 'can', 'chickpeas');
//     ingredient(0.25, 'cup', 'tahini');
//     ingredient(0.25, 'cup', 'lemon juice');
//     ingredient(1, 'clove', 'garlic');
//     ingredient(2, 'tablespoon', 'olive oil');
//     ingredient(0.5, 'teaspoon', 'cumin');
// };
// hummas(4);

// // let hummas = function () {
// //     let ingredient = function (amount, unit, name) {
// //         let ingredientAmount = amount;
// //         if (ingredientAmount > 1) {
// //             unit += 'S';
// //         }
// //         console.log(`${ingredientAmount} ${unit} ${name}`);
// //     };
// //     ingredient('1', 'can', 'chickpeas');
// //     ingredient(0.25, 'cup', 'tahini');
// //     ingredient(0.25, 'cup', 'lemon juice');
// //     ingredient(1, 'clove', 'garlic');
// //     ingredient(2, 'tablespoon', 'olive oil');
// //     ingredient(0.5, 'teaspoon', 'cumin');
// // };
// // hummas();

// function square2(x) {
//     return x * x;
// };
// console.log(square2(2)); //why??

// console.log('The future says...', future());
// function future() {
//     return 'You\'ll never have flying cars!';
// }
// future(); //why??

// let power2 = (base, exponent) => {
//     let result = 1;
//     for (let k = 0; k < exponent; k++) {
//         result *= base;

//     }
//     return result;
// };
// console.log(power2(2, 10));

// let horn = () => {
//     console.log('toot');
// };
// horn();

// let square1 = (x) => { return x * x };
// let square3 = x => x * x;

// square1(4); //does not work because of concole.log not being in the body? 
// console.log(square3(4));

// function greet(who) {
//     console.log('Hello' + ' ' + who);
// }
// greet('Harry');
// console.log('Bye');

// // function chicken() {
// //     return egg();
// // }
// // function egg() {
// //     return chicken();
// // }
// // console.log(chicken() + 'came first');

// function square4(x) { return x * x; }
// console.log(square4(4, true, "hedgehog"));

// function minus(a, b) {
//     if (b === undefined) return a;
//     else return a - b;
// }
// console.log(minus(25));
// console.log(minus(25, 14));

// function power3(base, exponent = 2) {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result *= base;
//     }
//     return result;
// }
// console.log(power3(4));
// console.log(power3(4, 4));

// function valueWrap(n) {
//     let local = n;
//     return () => local;
// }
// let wrap1 = valueWrap(1);
// let warp2 = valueWrap(2);
// console.log(wrap1());
// console.log(warp2());

// function multiplier(factor) {
//     return number => number * factor;
// }
// let twice = multiplier(2);
// console.log(twice(5));
// let thrice = multiplier(3);
// console.log(thrice(5));

// function power4(base, exponent) {
//     if (exponent === 0) {
//         return 1;
//     } else {
//         return base * power(base, exponent - 1);
//     }
// }
// console.log(power(2, 3));

// function findSolution(target) {
//     function find(current, history) {
//         if (current === target) {
//             return history;
//         } else if (current > target) {
//             return null;
//         } else {
//             return find(current + 5, `(${history} + 5)`) ||
//                 find(current * 3, `(${history} *3)`);
//         }
//     }
//     return find(1, '1');
// }
// console.log(findSolution(24));

// for (var i = 0; i < 3; i++) {
//     const log = () => {
//         console.log(i);
//     }
//     setTimeout(log, 100);
// }
// for (let i = 0; i < 3; i++) {
//     const log = () => {
//         console.log(i);
//     }
//     setTimeout(log, 100);
// }

function factorial(n) {
    if (n === 1 || n === 0)
        return 1;
    else return n * factorial(n - 1)
}
console.log(factorial(4));
console.log(factorial(1));

// function printFarmInventory(cows, chickens) {
//     let cowString = String(cows);
//     while (cowString.length < 3) {
//         cowString = "0" + cowString;
//     }
//     console.log(`${cowString} cows`);
//     let chickenString = String(chickens);
//     while (chickenString.length < 3) {
//         chickenString = '0' + chickenString;
//     }
//     console.log(`${chickenString} Chickens`);
// }
// printFarmInventory(7, 11); 

// function printZeroPaddedWithLabel(number, label) {
//     let numberString = String(number);
//     while (numberString.length < 3) {
//         numberString = "0" + numberString;
//     }
//     console.log(`${numberString} ${label}`);
// }
// function printFarmInventory(cows, chickens, pigs) {
//     printZeroPaddedWithLabel(cows, "Cows");
//     printZeroPaddedWithLabel(chickens, "Chickens");
//     printZeroPaddedWithLabel(pigs, "Pigs");
// }
// printFarmInventory(7, 11, 4); 

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}
function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory(7, 11, 4);

//define f to hold a function
let f = function (a) {
    console.log(a + 8);
}
f(8);

//declare g to be a function
function g(a, b) {
    console.log(a * b);
}
g(4, 4)

//a less verbose function value
let h = a => a * 4;
console.log(h(4));

