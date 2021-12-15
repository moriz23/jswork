//variable is a data container/data storage, value can change - let. Const you can't change the value.
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOput(operator, resultBeforeCalc, calcNumber) {
  calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeLog(operation, enteredNumber, initialResult, currentResult) {
  logEntry = {
    operation: operation,
    enteredNumber: enteredNumber,
    initialResult: initialResult,
    currentResult: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOput('+', initialResult, enteredNumber);
  writeLog('ADD', enteredNumber, initialResult, currentResult);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOput('-', initialResult, enteredNumber);
  writeLog('SUBTRACT', enteredNumber, initialResult, currentResult);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOput('/', initialResult, enteredNumber);
  writeLog('DIVIDE', enteredNumber, initialResult, currentResult);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOput('*', initialResult, enteredNumber);
  writeLog('MULTIPLY', enteredNumber, initialResult, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multiply);
