// create the function canIRide that will receive 3 parameters: height, isAccompanied(boolean) and hasHeartCondition(boolean) that will return true or false.
// these are the conditions to ride:
// be at least 1.5 m, or 1.2 if accompanied
// have no heart condition
function canIRide(height, isAccompanied, hasHeartCondition) {
    if((height>= 1.5 || (height>=1.2 && isAccompanied)) && !hasHeartCondition){
        return true;
    }
    else {
        return false;
    }
}

console.log(canIRide(1.2, true, false));

console.log(canIRide(1.5, false, false));

console.log(canIRide(1.2, true, true));

console.log(canIRide(1, true, false));