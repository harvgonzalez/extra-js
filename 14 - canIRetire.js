// create a canIRetire function that will receive 3 parameters: age, gender and years of contribution and will return true or false.
// keep in mind that the minimum age for women to retire is 60 years and men 65 years. in both cases you have to have at least 30 years of contribution.

// SOLUTION ON THIS LINK https://repl.it/@harveygonzalez/ElectronicPrimePlots#index.js

let gender = prompt("What's your gender female/male? :")

if (gender= "female"){
    let ageFem = prompt("What's your age? :");
    let yearsContribFem = prompt("How long have you been contributing (years)? :");

    const canIRetire = (ageFem, yearsContribFem) => {

        if(ageFem>=60 && yearsContribFem>=30) {
            console.log("You can retire, thanks for your service.")
        }
        else {
            console.log("Unfortunately you're not entitled to retire yet.")
        }

    }
  console.log(canIRetire(ageFem, yearsContribFem))

}

else if (gender= "male"){

    let ageMale = prompt("What's your age? :");
    let yearsContribMale = prompt("How long have you been contributing (years)? :");

    const canIRetire = (ageMale, yearsContribMale) => {
        let canRetire = false
        if(ageMale>=65 && yearsContribMale>=30) {
            canRetire = true
        }
        else {
            return canRetire
        }
      return canRetire
    }
  console.log(canIRetire(ageMale, yearsContribMale))
}




// SOLUTION ON THIS LINK https://repl.it/@harveygonzalez/ElectronicPrimePlots#index.js