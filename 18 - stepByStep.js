// create a function stepByStep that will receive a number as argument and print the numbers starting from 0.
// i.e: stepByStep(5)
// "012345"

const stepByStep = num => {
    let number = 0;
    const total = [];

    while(number != num +1) {
        total.push(number);
        number +=1
    }
    console.log(total.join(''));
}

stepByStep(10)