const numbers = [3, 4, 78, 89, 23, 56, 7, 45, 1];

//filter
const filteredNumbers = numbers.filter((number, index, numbers) => {
  return number > 5;
});
console.log(filteredNumbers);

//map
const mapNumbers = numbers.map((number, index, numbers) => {
  const numberObj = { num: number };
  return numberObj;
});
console.log(mapNumbers);

//sum
const products = numbers.reduce((prevValue, currValue, currIndex, prices) => {
  return prevValue * currValue;
}, 1);
console.log(products);

//findMax
const findMax = (...nums) => {
  console.log(Math.max(...nums));
};

findMax(...numbers);

const newFindMax = (...nums) => {
  let currValue = nums[0];
  for (const num of nums) {
    if (num > currValue) {
      currValue = num;
    }
  }
  return currValue;
};

console.log(newFindMax(...numbers));

//findMax and Min
const findMinAndMax = (...list) => {
  let maxNumber = Math.max(...list);
  let minNumber = Math.min(...list);
  let minAndMax = [];
  minAndMax.push(minNumber, maxNumber);
  const [min, max] = minAndMax;
  return `Min: ${min} Max: ${max}`;
};

console.log(findMinAndMax(...numbers));

const newFindMinAndMax = (...nums) => {
  let currMax = nums[0];
  let currMin = nums[0];
  for (const num of nums) {
    if (num > currMax) {
      currMax = num;
    }
    if (num < currMin) {
      currMin = num;
    }
  }
  return [currMin, currMax];
};

const [min, max] = newFindMinAndMax(...numbers);
console.log(`Min: ${min} Max: ${max}`);

//Sets no duplicates
const listOfNames = new Set(['Molly', 'Sally', 'Susan', 'John', 'Jacob']);
console.log(listOfNames);
