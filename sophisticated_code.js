/* 
 * Filename: sophisticated_code.js
 * Content: An elaborate and complex JavaScript code showcasing various concepts and techniques 
 */

// Class definition for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
  
  static compareAges(person1, person2) {
    return person1.age - person2.age;
  }
}

// Function to generate random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array of Person objects
const people = [
  new Person("Alice", 25),
  new Person("Bob", 30),
  new Person("Charlie", 20),
  new Person("David", 40)
];

// Sorting the people array by age
people.sort(Person.compareAges);

// Creating a new array of person names
const names = people.map(person => person.name);

// Function to find the average age of people in the array
function findAverageAge(people) {
  const totalAge = people.reduce((sum, person) => sum + person.age, 0);
  return totalAge / people.length;
}

// Finding the average age of people
const averageAge = findAverageAge(people);

// Using a closure to create a counter function
function counter() {
  let count = 0;
  
  return {
    increment: function() {
      count++;
    },
    decrement: function() {
      count--;
    },
    getCount: function() {
      return count;
    }
  };
}

// Creating a counter object using the closure
const myCounter = counter();

// Randomly incrementing and decrementing the counter
for (let i = 0; i < 10; i++) {
  if (getRandomNumber(0, 1)) {
    myCounter.increment();
  } else {
    myCounter.decrement();
  }
}

// Displaying the final count
console.log(`Final count: ${myCounter.getCount()}`);

// Recursive function to calculate factorial
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  
  return n * factorial(n - 1);
}

// Calculating factorial of 5
console.log(`Factorial of 5: ${factorial(5)}`);

// Class definition for a Shape
class Shape {
  constructor(color) {
    this.color = color;
  }
  
  getColor() {
    return this.color;
  }
  
  // Abstract method to calculate area
  calculateArea() {
    throw new Error("Abstract method 'calculateArea' must be implemented in derived classes.");
  }
}

// Derived class Circle from Shape
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// Creating a Circle object and calculating its area
const circle = new Circle("red", 5);
console.log(`Area of the circle: ${circle.calculateArea()}`);

// Module pattern for creating a counter module
const counterModule = (function() {
  let count = 0;
  
  // Public methods
  return {
    increment: function() {
      count++;
    },
    decrement: function() {
      count--;
    },
    getCount: function() {
      return count;
    }
  };
})();

// Incrementing and decrementing the count using the counter module
counterModule.increment();
counterModule.decrement();
counterModule.increment();
console.log(`Count from counter module: ${counterModule.getCount()}`);

// Complex asynchronous function using Promises
function complexAsyncFunction() {
  return new Promise(resolve => {
    setTimeout(() => {
      const randomValue = getRandomNumber(1, 10);
      resolve(randomValue);
    }, 2000);
  });
}

// Calling the complex asynchronous function and handling the result
complexAsyncFunction().then(result => console.log(`Random value: ${result}`));

// Exporting the necessary items from this file
export { Person, getRandomNumber, people, names, findAverageAge, myCounter, factorial, Circle, counterModule, complexAsyncFunction };