// create a function multiply, that will receive an array of numbers as argument and return the multiplication of all numbers.
// i.e: multiply([1, 4, 7]) should return 28, which is 1 * 4 * 7

function multiply(arr) {
    let total=1;
    for(let i=0; i< arr.length; i++){
        total *= arr[i]
    }
    return total;
    
}


console.log(multiply([1, 4, 7, 10]));
