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

// function calculateResult(calculationType) {
//   const enteredNumber = getUserInput();
//   const initialResult = currentResult;
//   let mathOperator;

//   if (
//     (calculationType != 'add' &&
//       calculationType != 'subtract' &&
//       calculationType != 'divide' &&
//       calculationType != 'multiply') ||
//     enteredNumber == 0
//   ) {
//     return;
//   }

//   if (calculationType === 'add') {
//     mathOperator = '+';
//     currentResult += enteredNumber;
//   } else if (calculationType === 'subtract') {
//     mathOperator = '-';
//     currentResult -= enteredNumber;
//   } else if (calculationType === 'divide') {
//     mathOperator = '/';
//     currentResult /= enteredNumber;
//   } else if (calculationType === 'multiply') {
//     mathOperator = '*';
//     currentResult *= enteredNumber;
//   }
//   createAndWriteOput(mathOperator, initialResult, enteredNumber);
//   writeLog(calculationType, enteredNumber, initialResult, currentResult);
// }

function calculateResult(operation) {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  let mathOperator;

  if (
    (operation != 'add' &&
      operation != 'subtract' &&
      operation != 'divide' &&
      operation != 'multiply') ||
    enteredNumber == 0
  ) {
    return;
  }

  if (operation === 'add') {
    mathOperator = '+';
    currentResult += enteredNumber;
  } else if (operation === 'subtract') {
    mathOperator = '-';
    currentResult -= enteredNumber;
  } else if (operation === 'divide') {
    mathOperator = '/';
    currentResult /= enteredNumber;
  } else if (operation === 'multiply') {
    mathOperator = '*';
    currentResult *= enteredNumber;
  }
  createAndWriteOput(mathOperator, initialResult, enteredNumber);
  writeLog(operation, enteredNumber, initialResult, currentResult);
}

// function add() {
//   calculateResult('add');
// }

// function subtract() {
//   calculateResult('subtract');
// }

// function divide() {
//   calculateResult('divide');
// }

// function multiply() {
//   calculateResult('multiply');
// }

addBtn.addEventListener('click', calculateResult.bind(this, 'add'));
subtractBtn.addEventListener('click', calculateResult.bind(this, 'subtract'));
divideBtn.addEventListener('click', calculateResult.bind(this, 'divide'));
multiplyBtn.addEventListener('click', calculateResult.bind(this, 'multiply'));
