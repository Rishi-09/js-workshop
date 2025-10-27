/*
  module-06-functions/functions-demo.js
  Purpose: Demonstrate declarations, expressions, defaults and scope.
*/

// Function declaration (hoisted)
function add(a, b = 0) {
  return a + b;
}

// Function expression
const multiply = function (a, b) {
  return a * b;
};

// Arrow function
const square = (x) => x * x;

console.log("add(2,3) =>", add(2, 3));
console.log("multiply(2,3) =>", multiply(2, 3));
console.log("square(4) =>", square(4));


// Hoisting demo
console.log("hoisted:", hoisted(2)); // works
function hoisted(n) {
  return n * 2;
}

// try calling non-hoisted:

// console.log(notHoisted(2)); // Error if uncommented
const notHoisted = function (n) { return n * 3; };

// Try it yourself:
// - Convert multiply to arrow function and compare 'this' behavior in objects.
