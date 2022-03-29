let mood = 'light';
console.log(mood);
mood = 'dark';
console.log(mood);
mood = 'sunny';
console.log(mood);
mood = 'gloomy';
console.log(mood);

let moneys = 140;
console.log(moneys);
moneys = moneys - 35;
console.log(moneys);

var Pname = 'Francis';
const greeting = 'Hello World';
console.log(greeting + ' ' + Pname);
console.log(Pname + ' ' + greeting);

// prompt('enter passcode');
console.log(Math.max(7, 4, 6));
console.log(Math.min(4, 3, 8) + 100);

// let theNumber = Number(prompt("Pick a number"));
// console.log("Your number is the square root of" + theNumber * theNumber); 
if (1 + 3 === 2) {
    console.log('it is true');
}
else {
    console.log('Hey! I did not get my number!');
}

let theSum = 150;
if (theSum === 140) {
    console.log('I am working');
}
else if (theSum <= 140) {
    console.log('this works now');

}
else {
    console.log('And then BIG me')
}
let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
};

let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);

// let yourName;
// do {
//     yourName = prompt("Who are you? ");
// } while (!yourName);
// console.log(yourName); 

for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
};

let result1 = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
    result1 = result1 * 2;
}
console.log(result1);

for (let current = 20; ; current = current + 1) {
    if (current % 7 === 0) {
        console.log(current);
        break;
    }
}
// for (let current = 21; ;) {
//     if (current % 7 === 0) {
//         console.log(current);
//         break;
//     }
// }

for (let number = 0; number <= 12; number += 2) {
    console.log(number);
}

// switch (prompt('what is the weather like?')) {
//     case "rainy":
//         console.log('remember to bring an umbrella');
//         break;
//     case "sunny":
//         console.log('dress lighty');
//         break;
//     case "cloudy":
//         console.log('Go outside');
//         break;
//     default:
//         console.log('Unknown weather type!');
//         break;
// }