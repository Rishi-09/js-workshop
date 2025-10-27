/*
  prototypes-inheritance.js
  Shows prototypal inheritance and prototype chain lookup.
*/


function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(this.name + " makes a noise.");
};

const dog = new Animal("Bingo");
dog.speak(); // Bingo makes a noise.

// ES6 class way
class Cat extends Animal {
  speak() {
    console.log(this.name + " meows.");
  }
}
const kitty = new Cat("Kitty");
kitty.speak(); // Kitty meows.



// Constructor function
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  return "Hello, " + this.name;
};

const p = new Person("Rishi");
console.log(p.greet()); // Hello, Rishi
console.log("Prototype of p:", Object.getPrototypeOf(p));
console.log("Person.prototype:", Person.prototype);

// Inheritance: Student inherits from Person
function Student(name, id) {
  Person.call(this, name); // inherit properties
  this.id = id;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.info = function () {
  return `${this.name} (${this.id})`;
};

const s = new Student("Anita", 101);
console.log(s.greet()); // from Person.prototype
console.log(s.info());
