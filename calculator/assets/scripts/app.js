//variable is a data container/data storage, value can change - let. Const you can't change the value.
const defaultResult = 0;
let currentResult = defaultResult;

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
  currentResult = currentResult + enteredNumber;
  createAndWriteOput('+', initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOput('-', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOput('/', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOput('*', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multiply);
