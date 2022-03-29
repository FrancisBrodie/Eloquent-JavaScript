let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);
// console.log(sum(range(1, 10)));

let x = 100;
let y = 14;
console.log(x - y);
console.log(x % y);

let a = `half of 100 is ${100 / 2}`;
// let a = "half of 100 is" + ' ' + (100 / 2);
console.log(a);

console.log(typeof 4.5);
// // -->number
console.log(+(10 - 2));
//  //-->8
// //- typeof - Unary Operators 

console.log(3 > 2);
// // → true 

console.log("Itchy" != "Scratchy");
// // → true 
console.log("Itchy" == "Scratchy");
// // → False  
console.log("Itchy" == "Itchy");
// // → true  
let b = 1 + 1 == 2 && 10 * 10 > 50;
console.log(b)

console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
console.log(8 * null);
// // --> 0
console.log("5" - 1);
// //--> 4 you can also just put the #
console.log('five' - 1);
// //--> NaN - has to be an actual #
console.log(false == 0);
// // --> true 
console.log(true == 0);
// //-->False 

console.log(null == undefined);
// // → true
console.log(null == 0);
// // → false
console.log(1 === 1);
// // --> true 
console.log(1 === 2);
// // --> false 
console.log(1 !== 2);
// // --> true 

console.log(null || "user")
// // → user
console.log("Agnes" || "user")
// // → Agnes