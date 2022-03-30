// // let result = "#"
// // while (result.length <= 7) {
// //     console.log(result);
// //     result = result + "#";
// // }
// // for (let result = '#'; result.length <= 7; result = result + '#') {
// //     console.log(result);
// // }

// for (let a = 0; a < 100; a = a + 1) {
//     if (a % 15 === 0) {
//         console.log('FizzBuzz');
//     }
//     else if (a % 3 === 0) {
//         console.log('Fizz');
//     }
//     else if (a % 5 === 0) {
//         console.log('Buzz');
//     }
//     else console.log(a);
// }

// for (let a = 0; a <= 100; a = a + 1) {
//     if (a % 3 === 0) {
//         console.log('Fizz');
//     }
//     else if (a % 5 === 0) {
//         console.log('Buzz');
//     }
//     else console.log(a);
// }
// let size = 8;
// let result = "#"
// for (let a = 0; a < size; a += 1) {
//     for (let b = 0; b < 1; b += 1) {
//         if ((b + a) % 2 === 0)
//             result += (b + a) + '%';
//         else
//             result += (b + a) + "#";
//     }
//     result += '\n';
// }

// console.log(result); 

let board = ""
let size = 8
let x = 0
let y = 0

while (x < size) {
    while (y < size) {
        if ((x + y) % 2 == 0)
            board += " ";
        else
            board += "#";
        y++;
    }
    board += "\n";
    x++;
    y = 0;
}

console.log(board) 
