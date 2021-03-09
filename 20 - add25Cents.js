// create a add25Cents function that will receive a number as parameter and return the sum of the coins of 25 cents.
// i.e: add25Cents(7)
// 1.75
// which is: 0.25+0.25+0.25+0.25+0.25+0.25+0.25

function add25Cents(num){
    return "€" + num * 0.25;
}

console.log(add25Cents(10));