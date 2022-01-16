class Course {
  #price;

  get price() {
    return '$' + this.#price;
  }
  set price(value) {
    if (this.#price < 0) {
      throw 'Invalid Error!';
    } else {
      this.#price = value;
    }
  }
  constructor(title, length, coursePrice) {
    this.title = title;
    this.length = length;
    this.price = coursePrice;
  }

  courseCalculate() {
    const total = this.#price / this.length;
    return total;
  }

  courseSummary(summary) {
    this.courseSummary = summary;
    const courseDesc = `
      Title: ${this.title}
      Length: ${this.length}
      Price: ${this.price}
      Summary: ${this.courseSummary}
    `;
    return courseDesc;
  }
}

class PracticalCourses extends Course {
  constructor(title, length, price, exceriseCount) {
    super(title, length, price);
    this.numOfExcerises = exceriseCount;
  }
}

class TheoreticalCourse extends Course {
  publish() {
    console.log('hey');
  }
}

const history = new Course('History 101', 50, 500.99);
const programming = new Course('Programming 101', 30, 200.99);
const react = new PracticalCourses('React 101', 100, 900, 88);
const javascript = new TheoreticalCourse();

console.log(history);
console.log(programming);
console.log(history.courseCalculate());
console.log(programming.courseCalculate());
console.log(
  history.courseSummary('This course is great for learning about History')
);
console.log(
  programming.courseSummary(
    'This course is great for learning about Programming'
  )
);

console.log(react);
console.log(javascript.publish());
