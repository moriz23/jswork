class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}
class Person extends AgedPerson {
  name = 'Max';

  constructor() {
    super();
    this.age = 30;
  }

  greet() {
    console.log(`Hi my name is ${name} and I'm ${this.age} years old.`);
  }
}

// function Person() {
//   this.age = 30;
//   this.name = 'Max';
//   this.greet = function () {
//     console.log(`Hi my name is ${name} and I'm ${this.age} years old.`);
//   };
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

// const person = new Person();
// person.greet();
// person.printAge();
// console.log(person.__proto__);

const course = {
  title: 'React',
  rating: 5,
};

Object.setPrototypeOf(course, {
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});
// Object.setPrototypeOf(course, {
//   ...Object.getPrototypeOf(course),
//   printRating: function () {
//     console.log(`${this.rating}/5`);
//   },
// });

const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: 'Mohammed',
      writable: false,
    },
  }
);

// student.name = 'Mohammed Rizvi';

Object.defineProperty(student, 'progress', {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false,
});

student.printProgress();

console.log(student);

course.printRating();
