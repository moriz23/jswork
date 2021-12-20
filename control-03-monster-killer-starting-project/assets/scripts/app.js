const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

let enteredValue = parseInt(prompt('Choose the max number', '100'));
let chosenMaxLife = enteredValue;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = [];
let lastLoggedEntry;

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

adjustHealthBars(chosenMaxLife);

function writeBattleLog(event, value, monsterHealth, playerHealth) {
  let logEntry;
  logEntry = {
    event: event,
    value: value,
    target: 'Monster',
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };
  switch (event) {
    case 'playerAttack':
      logEntry.target = 'Monster';
      break;
    case 'strongAttack':
      logEntry.target = 'Monster';
      break;
    case 'monsterAttack':
      logEntry.target = 'Player';
      break;
    case 'heal':
      logEntry.target = 'Player';
      break;
    case 'gameOver':
      logEntry = {
        event: event,
        value: value,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    default:
      logEntry = {};
  }
  // if (event === 'playerAttack') {
  //   logEntry.target = 'Monster';
  // } else if (event === 'strongAttack') {
  //   logEntry.target = 'Monster';
  // } else if (event === 'monsterAttack') {
  //   logEntry.target = 'Player';
  // } else if (event === 'heal') {
  //   logEntry.target = 'Player';
  // } else if (event === 'gameOver') {
  //   logEntry = {
  //     event: event,
  //     value: value,
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // }
  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  let initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeBattleLog(
    'monsterAttack',
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    alert('You would have been dead but you have a bonus life');
    setPlayerHealth(initialPlayerHealth);
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You Won!');
    writeBattleLog(
      'gameOver',
      'Player Won!',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0) {
    alert('You Lost!');
    writeBattleLog(
      'gameOver',
      'Monster Won!',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("It's a draw!");
    writeBattleLog(
      'gameOver',
      'Its a draw',
      currentMonsterHealth,
      currentPlayerHealth
    );
  }

  if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  const maxDamage = mode === 'ATTACK' ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  const logAttack = mode === 'ATTACK' ? 'playerAttack' : 'strongAttack';
  // if (mode === 'ATTACK') {
  //   maxDamage = ATTACK_VALUE;
  //   logAttack = 'playerAttack';
  // } else if (mode === 'STRONG') {
  //   maxDamage = STRONG_ATTACK_VALUE;
  //   logAttack = 'strongAttack';
  // }
  const monsterDamage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= monsterDamage;
  writeBattleLog(
    logAttack,
    monsterDamage,
    currentMonsterHealth,
    currentMonsterHealth
  );
  endRound();
}

function attackHandler() {
  attackMonster('ATTACK');
}

function strongAttackHandler() {
  attackMonster('STRONG');
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert('You cant go over your initial health');
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeBattleLog('heal', healValue, currentMonsterHealth, currentPlayerHealth);
  endRound();
}

function printLogHandler() {
  // for (let i = 0; i < battleLog.length; i++) {
  //   console.log(battleLog[i]);
  // }

  // let i = 0;
  // for (const logEntry of battleLog) {
  //   console.log(`#${i}`);
  //   for (const key in logEntry) {
  //     console.log(`${key} => ${logEntry[key]}`);
  //   }
  //   i++;
  // }

  let i = 0;
  for (const logEntry of battleLog) {
    if ((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry < i) {
      console.log(`#${i}`);
      for (const key in logEntry) {
        console.log(`${key} => ${logEntry[key]}`);
      }
      lastLoggedEntry = i;
      break;
    }
    i++;
  }

  // console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);
