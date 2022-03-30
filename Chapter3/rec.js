let numbers = [1, 92, 3]
function sum(numberList) {
    if (numberList.length === 0) return 0;
    var currentNumber = numberList.pop();
    var sumOfTheRest = sum(numberList);
    return currentNumber + sumOfTheRest;
}
console.log(sum(numbers));
