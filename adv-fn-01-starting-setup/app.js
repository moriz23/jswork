//pure functions
function add(num1, num2) {
  console.log(num1 + num2);
}

add(5, 12);

//impure functions
function random(num) {
  console.log(num + Math.random());
}

random(5);

let previousResult = 21;

function getSum(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return previousResult;
}

console.log(getSum(7, 100));

const hobbies = ['cooking', 'sports'];

function printHobbies(h) {
  h.push('New Hobbie');
  console.log(h);
}

printHobbies(hobbies);

//factory functions

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calcualteIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calcualteIncomeTaxAmount(200));

//Closure, every js function is a closure
//inner functions has accs to variables in the inner, outer, and globl scope. Lexicial environment.

let userName = 'Max';

function greetUser() {
  let name = userName;
  console.log('Hi' + userName);
}

userName = 'Manuel';

greetUser();

//Recursion

// function powerOf(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

function powerOf(x, n) {
  if (n === 1) {
    return x;
  }
  return x * powerOf(x, n - 1);

  //return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));

const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Manuel',
      friends: [
        {
          name: 'Chris',
          friends: [
            {
              name: 'John',
            },
            {
              name: 'Harry',
            },
          ],
        },
      ],
    },
    {
      name: 'Julia',
    },
  ],
};

function printFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...printFriendNames(friend));
  }

  return collectedNames;
}

console.log(printFriendNames(myself));
