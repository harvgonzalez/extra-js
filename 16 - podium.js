// create the function podium that will receive a parameter with the podium position and return a different string according to the position:
// first place: 'gold'
// second place: 'silver'
// third place: 'bronze'
// other places: 'keep trying!

function podium(position) {
    switch (position){
        case 1:
            return "gold"
            break;
        case 2:
            return "silver"
            break;
        case 3:
            return "bronze"
            break;
        default:
            return "keep trying!";
            break;
    }
}

console.log(podium(1));
console.log(podium(2));
console.log(podium(3));
console.log(podium(0));
console.log(podium(40));