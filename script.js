//First function to work on is aading a random number generator between 1 and 6
//as a dice only have 6 possible numbers

const rollDice = function() {
    return Math.floor(Math.random() * 6) + 1;
};

console.log(rollDice());