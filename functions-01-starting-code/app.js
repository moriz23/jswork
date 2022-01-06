const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT = ROCK;
const DRAW = 'DRAW!';
const PLAYER_WINS = 'PLAYER WINS!';
const COMPUTER_WINS = 'COMPUTER WINS!';

let COMPUTER_CHOICE;
let isGameRunning = false;

const getPlayerSelection = function () {
  const selection = prompt(
    `Choose between ${ROCK}, ${PAPER}, or ${SCISSORS}`,
    ''
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert('Invalid choice we chose ROCK for you');
    return DEFAULT;
  }
  return selection;
};

const getComputerChoice = function () {
  let randNum = Math.floor(Math.random() * 3) + 1;
  if (randNum === 1) {
    COMPUTER_CHOICE = ROCK;
  } else if (randNum === 2) {
    COMPUTER_CHOICE = PAPER;
  } else if (randNum === 3) {
    COMPUTER_CHOICE = SCISSORS;
  }
  return COMPUTER_CHOICE;
};

const getWinner = function (player, computer) {
  if (computer === player) {
    return DRAW;
  } else if (
    (player === PAPER && computer === ROCK) ||
    (player === SCISSORS && computer === PAPER) ||
    (player === ROCK && computer === SCISSORS)
  ) {
    return PLAYER_WINS;
  } else {
    return COMPUTER_WINS;
  }
};

startGameBtn.addEventListener('click', function () {
  if (isGameRunning) {
    return;
  }

  isGameRunning = true;
  console.log('GAME STARTING...');
  const playerSelection = getPlayerSelection();
  const computerSelection = getComputerChoice();
  const winner = getWinner(playerSelection, computerSelection);
  console.log('PLAYER: ' + playerSelection);
  console.log('COMPUTER: ' + computerSelection);
  console.log(winner);
});
