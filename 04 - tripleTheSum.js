// create a function called triple, that receives a number as argument and returns it multiplied by 3.
const triple = (num) => {
    return num *3;
}
// create a function called tripleTheSum that receives 2 numbers as arguments, add both numbers and return the triple of the result, by calling the triple function.

const tripleTheSum = (num1, num2) => {
    const numAdded = num1 + num2;
    return triple(numAdded);
}

console.log(triple(10));

console.log(tripleTheSum(8, 3));