let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(msg) {
  document.querySelector('.message').textContent = msg;
}

function checkGuess() {
  const guess = Number(document.querySelector('.guess-input').value);
  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    displayMessage(' Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = 'Highscore : ' + highscore;
    }
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = 'Score : ' + score;
    } else {
      displayMessage(' You lost the game!');
      document.querySelector('.score').textContent = 'Score : 0';
    }
  }
}

function resetGame() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 'Score : ' + score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start Guessing ...');
  document.querySelector('.guess-input').value = '';
  document.body.style.backgroundColor = '#222';
}