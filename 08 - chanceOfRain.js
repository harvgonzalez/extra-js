// create a function chanceOfRain, that will return the probability of rain in percentage, based on a random number received from Math.random() method.

const chanceOfRain = () => {
    const probability = Math.floor(Math.random() * 100) + "%";
    return probability;
}

console.log(chanceOfRain());