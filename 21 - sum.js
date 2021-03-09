// create a function sum, that will receive a number as a parameter and return the sum of the numbers previous to it.
// i.e: sum(4)
// 6
// which is 0 + 1 + 2 + 3

function sum (num) {
    let total = []
    for(let i=0; i<num; i++) {
        total.push(i)
    }
    console.log(total.reduce((a, b) => a + b, 0));
}


sum(4);
sum(5);
sum(10);
sum(11);