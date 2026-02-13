let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;


// Always add listener (not inside if)
submit.addEventListener('click', function (e) {
  e.preventDefault();

  if (!playGame) return;

  const guess = parseInt(userInput.value);
  validateGuess(guess);
});


function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } 
  else if (guess < 1 || guess > 100) {
    alert('Enter number between 1 and 100');
  } 
  else {
    prevGuess.push(guess);

    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over! Number was ${randomNumber}`);
      endGame();
    } 
    else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}


function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`🎉 You guessed it right!`);
    endGame();
  } 
  else if (guess < randomNumber) {
    displayMessage(`📉 Too low`);
  } 
  else {
    displayMessage(`📈 Too high`);
  }
}


function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  remaining.innerHTML = `${10 - numGuess}`;
  numGuess++;
}


function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}


function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');

  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;

  startOver.appendChild(p);

  playGame = false;

  setupNewGame();
}


function setupNewGame() {
  const newGameButton = document.querySelector('#newGame');

  newGameButton.addEventListener('click', function () {

    randomNumber = Math.floor(Math.random() * 100) + 1;

    prevGuess = [];
    numGuess = 1;

    guessSlot.innerHTML = '';
    remaining.innerHTML = '10';
    lowOrHi.innerHTML = '';

    userInput.removeAttribute('disabled');

    startOver.removeChild(p);

    playGame = true;
  });
}
