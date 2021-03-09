// create a function largerThan that will receive 2 numbers as parameters and return the largest number only
const largerThan = (num1, num2) => {
     const largest =num1 > num2 ? num1 : num2;
     return largest;
}

console.log(largerThan(2, 5));