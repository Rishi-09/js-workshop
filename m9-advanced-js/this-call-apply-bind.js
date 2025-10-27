const user = {
  name: "Rishi",
  sayHello: function() {
    console.log("Hello, " + this.name);
  }
};

user.sayHello(); // Hello, Rishi

const another = { name: "Aditi" };
user.sayHello.call(another); // Hello, Aditi

// bind example
const boundHello = user.sayHello.bind({ name: "Priya" });
boundHello(); // Hello, Priya


/*
  this-call-apply-bind.js
  Demonstrates 'this' binding rules, and call/apply/bind.
*/

const person = {
  name: "Rishi",
  greet: function (greeting) {
    console.log(greeting + ", " + this.name);
  }
};

person.greet("Hi"); // implicit binding: this -> person

// default binding (global or undefined in strict mode)
const greetFunc = person.greet;
try {
  greetFunc("Hello"); // 'this' loses context
} catch (e) {
  console.log("Calling detached function might fail in strict mode:", e && e.name);
}

// Explicit binding
greetFunc.call(person, "Hey call"); // this -> person
greetFunc.apply(person, ["Hey apply"]);

// bind creates a new function with 'this' fixed
const boundGreet = greetFunc.bind(person);
boundGreet("Bound hello");

// Arrow functions: lexical 'this'
const arrowObj = {
  name: "Arrow",
  arrowGreet: () => {
    console.log("arrow this ->", this && this.name); // undefined or outer 'this'
  },
  regularGreet() {
    console.log("regular this ->", this.name);
  }
};
arrowObj.arrowGreet();
arrowObj.regularGreet();
