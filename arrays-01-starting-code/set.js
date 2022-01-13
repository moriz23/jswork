const ids = new Set([1, 2, 3]);
console.log(ids.has(1));
ids.add(2);
console.log(ids.has(2));
console.log(ids);

for (const entry of ids.entries()) {
  console.log(entry);
  console.log(entry[0]);
}
for (const value of ids.values()) {
  console.log(value);
}

ids.delete(2);
console.log(ids);

const person1 = { name: 'Max' };
const person2 = { name: 'Manuel' };

const personDatas = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

personDatas.set(person2, [{ date: '2 weeks ago', price: 100 }]);

console.log(personDatas);
console.log(personDatas.get(person1));

for (const [key, value] of personDatas.entries()) {
  console.log(key, value);
}

for (const key of personDatas.keys()) {
  console.log(key);
}

for (const value of personDatas.values()) {
  console.log(value);
}

console.log(personDatas.size);

let newPerson = { name: 'Momeny' };
const newPersons = new WeakSet();
newPersons.add(newPerson);

console.log(newPersons);

const personDat = new WeakMap();
personDat.set(newPerson, 'Extra info!');
console.log(personDat);
