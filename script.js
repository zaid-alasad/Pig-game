const DisplayRollDice = function () {
  // Generate a new random dice number each time the function is called
  const diceNumber = Math.floor(Math.random() * 6) + 1;
  const imageDisplayedOfDice = document.querySelector('.dice');

  // Set the image based on the random number
  if (diceNumber === 1) {
    imageDisplayedOfDice.src = 'dice-1.png';
  } else if (diceNumber === 2) {
    imageDisplayedOfDice.src = 'dice-2.png';
  } else if (diceNumber === 3) {
    imageDisplayedOfDice.src = 'dice-3.png';
  } else if (diceNumber === 4) {
    imageDisplayedOfDice.src = 'dice-4.png';
  } else if (diceNumber === 5) {
    imageDisplayedOfDice.src = 'dice-5.png';
  } else if (diceNumber === 6) {
    imageDisplayedOfDice.src = 'dice-6.png';
  }
};

const changeDiceOnRollClick = function () {
  document
    .querySelector('.btn--roll')
    .addEventListener('click', DisplayRollDice);
};

// Make sure this function is called to attach the event listener
changeDiceOnRollClick();

const currentPlayer = function (){
    
};
