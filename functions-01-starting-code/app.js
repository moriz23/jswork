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

const getPlayerSelection = () => {
  const selection = prompt(
    `Choose between ${ROCK}, ${PAPER}, or ${SCISSORS}`,
    ''
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert('Invalid choice we chose ROCK for you');
    return;
  }
  return selection;
};

const getComputerChoice = () => {
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

const getWinner = (computer, player = DEFAULT) =>
  computer === player
    ? DRAW
    : (player === PAPER && computer === ROCK) ||
      (player === SCISSORS && computer === PAPER) ||
      (player === ROCK && computer === SCISSORS)
    ? PLAYER_WINS
    : COMPUTER_WINS;
// if (computer === player) {
//   return DRAW;
// } else if (
//   (player === PAPER && computer === ROCK) ||
//   (player === SCISSORS && computer === PAPER) ||
//   (player === ROCK && computer === SCISSORS)
// ) {
//   return PLAYER_WINS;
// } else {
//   return COMPUTER_WINS;
// }

startGameBtn.addEventListener('click', () => {
  if (isGameRunning) {
    return;
  }

  isGameRunning = true;
  console.log('GAME STARTING...');
  const playerSelection = getPlayerSelection();
  const computerSelection = getComputerChoice();
  const winner = getWinner(computerSelection, playerSelection);

  console.log('PLAYER: ' + playerSelection);
  console.log('COMPUTER: ' + computerSelection);
  console.log(winner);
  const message = `PLAYER got ${
    playerSelection || DEFAULT
  } and  COMPUTER got ${computerSelection}`;
  if (winner === PLAYER_WINS) {
    alert(message + ' PLAYER WINS!');
  } else if (winner === COMPUTER_WINS) {
    alert(message + ' COMPUTER WINS!');
  } else {
    alert(message + " it's a DRAW!");
  }
  isGameRunning = false;
});

//not part of game

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let total = 0;
  for (const number of numbers) {
    if (operation === 'ADD') {
      total += validateNumber(number);
    } else {
      total -= validateNumber(number);
    }
  }
  return resultHandler(total);
};

// const subtractUp = function (resultHandler, ...numbers) {
//   const validateNumber = function (num) {
//     return isNaN(num) ? 0 : num;
//   };

//   let sum = 0;
//   for (const num of numbers) {
//     sum -= validateNumber(num);
//   }

//   return resultHandler(sum);
// };

const showResult = (messageText, result) => {
  alert(`${messageText} ${result}`);
};

combine(
  showResult.bind(this, 'The result of adding all numbers is'),
  'ADD',
  1,
  2,
  'ghgh',
  10,
  56,
  78,
  102,
  -60,
  76
);
combine(
  showResult.bind(this, 'The result of subtracting all numbers is'),
  'SUBTRACT',
  10,
  2,
  'ghgh',
  10,
  -56,
  78,
  102,
  -60,
  76
);
