let square = function (x) {
    return x * x;
};
console.log(square(8));

let makeNoise = function () {
    console.log("Ping!");
};
makeNoise();

let power = function (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count += 1) {
        result *= base;
    }
    return result;
};
console.log(power(2, 10))


let halve = function (n) {
    return n / 2;
};
let n = 10;
console.log(halve(100));
console.log(n);

let hummas = function (factor) {
    let ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += 'S';
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient('1', 'can', 'chickpeas');
    ingredient(0.25, 'cup', 'tahini');
    ingredient(0.25, 'cup', 'lemon juice');
    ingredient(1, 'clove', 'garlic');
    ingredient(2, 'tablespoon', 'olive oil');
    ingredient(0.5, 'teaspoon', 'cumin');
};
hummas(4);

// let hummas = function () {
//     let ingredient = function (amount, unit, name) {
//         let ingredientAmount = amount;
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
// hummas();

function square2(x) {
    return x * x;
};
console.log(square2(2)); //why??

console.log('The future says...', future());
function future() {
    return 'You\'ll never have flying cars!';
}
future(); //why??

let power2 = (base, exponent) => {
    let result = 1;
    for (let k = 0; k < exponent; k++) {
        result *= base;

    }
    return result;
};
console.log(power2(2, 10));

let horn = () => {
    console.log('toot');
};
horn();

let square1 = (x) => { return x * x };
let square3 = x => x * x;

square1(4); //does not work because of concole.log not being in the body? 
console.log(square3(4));

function greet(who) {
    console.log('Hello' + ' ' + who);
}
greet('Harry');
console.log('Bye');

// function chicken() {
//     return egg();
// }
// function egg() {
//     return chicken();
// }
// console.log(chicken() + 'came first');

function square4(x) { return x * x; }
console.log(square4(4, true, "hedgehog"));

function minus(a, b) {
    if (b === undefined) return a;
    else return a - b;
}
console.log(minus(25));
console.log(minus(25, 14));

function power3(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power3(4));
console.log(power3(4, 4));
