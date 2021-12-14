//variable is a data container/data storage, value can change - let. Const you can't change the value.
const defaultResult = 0;
let currentResult = defaultResult;
let logEntry = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOput(operator, resultBeforeCalc, calcNumber) {
  calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOput('+', initialResult, enteredNumber);
  logEntry.push(enteredNumber);
  console.log(logEntry);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOput('-', initialResult, enteredNumber);
  logEntry.push(enteredNumber);
  console.log(logEntry);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOput('/', initialResult, enteredNumber);
  logEntry.push(enteredNumber);
  console.log(logEntry);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOput('*', initialResult, enteredNumber);
  logEntry.push(enteredNumber);
  console.log(logEntry);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multiply);
