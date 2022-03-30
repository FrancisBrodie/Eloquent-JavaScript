// let rangeSum = function (start, end) {
//     let counter = 0;
//     for (let i = start; i <= end; i++) {
//         counter += i;
//     }
//     return counter
// }
// console.log(rangeSum(0, 0) === 0);
// console.log(rangeSum(0, 5) === 10);

for (let i = 0; i < 5; i++) {
    console.log('loop');
}
for (let j = 5; j > 0; j--) {
    console.log('backwards loop' + j);
}

let names = ['francis', 'Jacques', 'fred', 'lucy']
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
for (name of names) {
    console.log(name);
}

let i = 0;
while (i < 10) {
    i++;
    if (i === 5) continue;
    console.log(i);
}
for (let i = 0; i <= 5; i++) {
    // console.log('hello world', i);
    if (i % 2 !== 0) {
        console.log('buzz');
    }
    else if (i % 2 === 0) {
        console.log('fizz', i);
    }
    else (console.log(i))

}

let something = [[1, 2], [3, 4], [5, 6]];
for (let i = 0; i < something.length; i++) {
    for (let j = 0; j < something[i].length; j++)
        console.log(something[i][j]);
}
