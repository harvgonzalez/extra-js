// create a function luckyNumber that will receive a number as a parameter and return if it is a lucky number or not. A lucky number must match these conditions:
// it is positive
// it is a multiple of 2 or 3
// it is not 15

const luckyNumber = num => {
    if(num>0 && num%2===0 && num%3===0 && num !=15){
        return num + " is a lucky number!";
    }
    else {
        return "Sorry not a lucky number.";
    }
}

console.log(luckyNumber(24));