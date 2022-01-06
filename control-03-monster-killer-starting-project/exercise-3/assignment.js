const randNum = Math.random();

if (randNum >= 0.7) {
  alert(`The number is ${randNum}`);
}

const numArray = [5, 100, 7, 8, 99, 2];

console.log('FOR LOOP');
for (let i = 0; i < numArray.length; i++) {
  console.log(`${i + 1}) ${numArray[i]}`);
}

console.log('FOR EACH LOOP');
numArray.forEach((number, index) => {
  console.log(`${index + 1}) ${number}`);
});

console.log('FOR LOOP LAST TO FIRST INDEX');
for (let i = numArray.length; i >= 0; i--) {
  console.log(`${i + 1}) ${numArray[i]}`);
}

const randNum2 = Math.random();

if ((randNum >= 0.7 && randNum2 >= 0.7) || randNum <= 0.2 || randNum2 <= 0.2) {
  console.log(randNum + ' ' + randNum2);
}
