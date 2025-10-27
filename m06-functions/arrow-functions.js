/*
  module-06-functions/arrow-functions.js
  Purpose: Show concise arrow functions and 'this' caveats.
*/


// Arrow functions

const greet = name => console.log(`Hello, ${name}!`);
greet("Student");

// With multiple parameters
const power = (x, y) => x ** y;
console.log(power(2, 3));



const person = {
  name: "SHAKTIMAAAN",
  greetRegular: function () {
    // 'this' refers to person
    console.log("Regular:", this.name);
  },
  greetArrow: () => {
    // Arrow functions don't bind their own 'this'
    console.log("Arrow:", this && this.name); // likely undefined in this context
  },
};

greetRegular(); // prints 'Rishi'
greetArrow(); // does not print 'Rishi' as expected

// Use arrow functions for short callbacks where 'this' isn't needed.
setTimeout(() => console.log("Timeout using arrow function"), 100);

// Try it:
// - Change greetArrow to a regular function and observe 'this' change.
