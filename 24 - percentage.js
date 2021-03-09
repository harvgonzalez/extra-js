// create a function percentage that will receive an array of numbers and return another with 3 numbers: index 0 will be the percentage of positive numbers, index 1 will be the percentage of numbers that are zero and index 2 the percentage of negative numbers.
// i.e: percentage([1, 2, 0, -1]) should return [0.5, 0.25, 0.25], as there are 50% of positive numbers, 25% zeros, and 25% negative numbers.

function percentage(arr){
    let posNum = 0;
    let zeros = 0;
    let negNum = 0;
    
    const value = 100/arr.length;

    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            posNum += value;
        }
        else if(arr[i]===0) {
            zeros +=value
        }
        else {
            negNum += value
        }
    }
    const total = [posNum, zeros, negNum]
    return total;
}

console.log(percentage([1, 2, 0, -1]))

