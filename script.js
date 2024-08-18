//First function to work on is aading a random number generator between 1 and 6
//as a dice only have 6 possible numbers

const rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

console.log(rollDice());

let player1Score = 0;
let player2Score = 0;

const showResult = function () {
  const dice1 = rollDice();

  const picture = document.querySelector('.dice');

  if (rollDice === 1) {
    picture.src = 'dice1.png';
  } else if (rollDice === 2) {
    picture.src = 'dice2.png';
  } else if (rollDice === 4) {
    picture.src = 'dice4.png';
  } else if (rollDice === 5) {
    picture.src = 'dice5.png';
  } else if (rollDice === 6) {
    picture.src = 'dice6.png';
  }
};



