// create a canIGoToTheBank function that will receive 2 parameters: the day of the week and the time. The function must return true only if the bank is still open.
// keep in mind that the bank is open from Monday through Friday and from 10:00 until 18:00
const openDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const openingTime = "10:00"; 
const closingTime = "18:00";

function canIGoToTheBank (day, time){
    if(day==="Sunday" && time < openingTime && time>=closingTime){
        return false;
    }
    else if(openDays.includes(day) && time >= openingTime && time < closingTime){
        return true;
    }

}
console.log(canIGoToTheBank("Monday", "11:20"));

console.log(canIGoToTheBank("Sunday", "11:00"));

console.log(canIGoToTheBank("Tuesday", "18:01"));
