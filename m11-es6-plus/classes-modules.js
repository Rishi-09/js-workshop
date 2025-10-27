// classes-modules.js
// Minimal class example
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hi, I am ${this.name}`;
  }
}

const p = new Person("Rishi");
console.log(p.greet());

// Modules example: see module file module-example.mjs in exercises
