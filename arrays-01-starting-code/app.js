const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = new Array(4, 5, 6);
console.log(moreNumbers);

const evenMoreNumbers = Array.of(7, 8, 9);
console.log(evenMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);
const listArray = Array.from(listItems);
console.log(listArray);

const nestedArray = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, 9],
];

for (const itemsArray of nestedArray) {
  for (const item of itemsArray) {
    console.log(item);
  }
}

const hobbies = ['Sports', 'Cooking'];
hobbies.push('Gym');
console.log(hobbies);
hobbies.unshift('Reading');
console.log(hobbies);
hobbies.splice(1, 0, 'Good Food');
console.log(hobbies);
hobbies.splice(0, 1);
console.log(hobbies);

const numbersList = [1, 3, 4, 7.6, 19, 104, 106.67];
console.log(numbersList.includes(19));
console.log(numbersList.indexOf(19) !== -1);
const storedNumbersLists = numbersList.splice(-3, 1);
console.log(numbersList, storedNumbersLists);
const concatNumber = numbersList.concat([1.1, 21]);
console.log(concatNumber);
const findNumber = numbersList.indexOf(104);
console.log(findNumber);

const personData = [{ name: 'Max' }, { name: 'Manual' }];
const manual = personData.find((person, index, persons) => {
  return person.name === 'Manual';
});
console.log(manual);
const maxIndex = personData.findIndex((person, index, persons) => {
  return person.name === 'Max';
});
console.log(maxIndex);

const prices = [1.0, 2.9, 67.9, 100.0, 4.35];
const tax = 0.19;
const taxAdjustedPrice = [];

prices.forEach((price, index, prices) => {
  const priceObj = { index: index, taxAdjustedPrice: price * (1 + tax) };
  taxAdjustedPrice.push(priceObj);
});

console.log(taxAdjustedPrice);

const newPrices = [1, 2.9, 800, 93, 68.9, 101, 7, 500, 19.89, 4];
const taxPrice = 0.19;

const taxAdjustedPrices = newPrices.map((price, index, prices) => {
  const priceObj = { index: index, taxAdjustedPrice: price * (1 + taxPrice) };
  return priceObj;
});

console.log(newPrices, taxAdjustedPrices);

console.log('Sort');
const sortNewPrices = newPrices.sort((a, b) => {
  if (a === b) {
    return 0;
  } else if (a > b) {
    return 1;
  } else {
    return -1;
  }
});

console.log(sortNewPrices);
console.log(sortNewPrices.reverse());

const filteredPrices = newPrices.filter((price, index, prices) => {
  return price > 100;
});

console.log(filteredPrices);

const sum = newPrices.reduce((prevValue, currValue, currIndex, prices) => {
  return prevValue + currValue;
}, 0);

console.log(sum);

const data = 'new york;10.99;2000';
const transformedData = data.split(';');
console.log(transformedData);

const fragmentNames = ['Mohammed', 'Rizvi', 'John', 'Smith'];
const joinNames = fragmentNames.join(' ');
console.log(joinNames);

const copiedFragmentNames = [...fragmentNames];
fragmentNames.push('Mr');
console.log(copiedFragmentNames, fragmentNames);

console.log(Math.min(...numbersList));

const people = [
  { name: 'Jack Smith', age: 29 },
  { name: 'Mary Anaheim', age: 54 },
];
const copiedPeople = [...people];
const mapCopiedPeople = [
  ...people.map((person, index, people) => {
    const mapPerson = { name: person.name, age: person.age };
    return mapPerson;
  }),
];

people.push({ name: 'Johnny Cash', age: 23 });
people[0].age = 40;
console.log(people, copiedPeople, mapCopiedPeople);

const newName = ['Mohammed', 'Rizvi', 'Mr', 30];
const [firstName, lastName, ...otherInfo] = newName;

console.log(firstName, lastName, otherInfo);
