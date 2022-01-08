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

const checkingInputs = () => {
  console.log('All not empty');
};

sayHello('Mohammed');
sayHello();
sayHello2('What up', 'Mohammed');
sayHello2('Salutations');
const name = sayHello4('Mohammed');
console.log(`hey what up ${name}`);

const string = checkInput(checkingInputs, 'hey', 'dude', 'hey yo', 'hello');
