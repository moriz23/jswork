// function sayHello(name) {
//   console.log('Hi ' + name);
// }
const FALLBACK = 'John';

const sayHello = (name = FALLBACK) => {
  console.log('Hi ' + name);
};

const sayHello2 = (greeting, name = FALLBACK) => {
  console.log(`${greeting} ${name}`);
};

const sayHello3 = () => {
  console.log('How is it going mo money?');
};

const sayHello4 = (value) => {
  return value;
};

const checkInput = (cb, ...texts) => {
  let hasEmptyText = false;

  for (const text of texts) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }

  if (!hasEmptyText) {
    cb();
  }
};

const checkNumbers = (...numbers) => {
  for (const number of numbers) {
    if (numbers.includes(23)) {
      console.log(numbers);
      break;
    } else {
      console.log('List does noe include 23');
    }
  }
};

const checkingInputs = () => {
  console.log('All not empty');
};

const checkingNumbers23 = () => {
  console.log('All are numbers');
};

sayHello('Mohammed');
sayHello();
sayHello2('What up', 'Mohammed');
sayHello2('Salutations');
const name = sayHello4('Mohammed');
console.log(`hey what up ${name}`);

checkInput(checkingInputs, 'hey', 'dude', 'hey yo', 'hello');

checkNumbers(checkingNumbers23, 1, 5, 8, 10, 45, 23);
