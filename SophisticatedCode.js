/*
   File: SophisticatedCode.js
   Description: A sophisticated and elaborate code example in JavaScript
   
   This code is meant to be an example of a complex and professional JavaScript program. 
   It demonstrates various advanced programming techniques, design patterns, and handles
   large amounts of data. Please note that this code is for illustrative purposes only 
   and may not have any practical use.

   Author: John Doe
   Date: October 1, 2022
*/

// Define a class to represent a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Define a method to print the person's details
  printDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Define an array of people
const people = [
  new Person("John", 30),
  new Person("Alice", 25),
  new Person("Bob", 35)
];

// Use a higher-order function (map) to create a new array of people's ages
const ages = people.map(person => person.age);

// Use a functional programming technique (reduce) to sum up the ages
const totalAge = ages.reduce((sum, age) => sum + age, 0);

// Print the total age
console.log(`Total Age: ${totalAge}`);

// Use object destructuring to assign variables
const { name, age } = people[0];

// Use string interpolation to print the first person's details
console.log(`${name} is ${age} years old.`);

// Import a external library and use its functions
import { random, floor } from 'lodash';

// Generate and print a random number between 1 and 100
const randomNumber = floor(random(1, 100));
console.log(`Random Number: ${randomNumber}`);

// Define a class with inheritance
class Employee extends Person {
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }

  // Override the printDetails method
  printDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Position: ${this.position}`);
  }
}

// Create and print an employee's details
const employee = new Employee("Jane", 45, "Manager");
employee.printDetails();

// Implement a complex algorithm (bubble sort) to sort an array
const numbers = [5, 3, 8, 1, 4];
for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - i - 1; j++) {
    if (numbers[j] > numbers[j + 1]) {
      [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
    }
  }
}

// Print the sorted array
console.log(`Sorted Numbers: ${numbers.join(", ")}`);

// Generate and print the factorial of a number
const factorial = num => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};
console.log(`Factorial of 5: ${factorial(5)}`);

// Implement a recursive function to calculate the Fibonacci sequence
const fibonacci = num => {
  if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

// Print the Fibonacci sequence up to the 10th number
for (let i = 0; i < 10; i++) {
  console.log(`Fibonacci(${i}): ${fibonacci(i)}`);
}

// ... more sophisticated code here ...

// End of the code