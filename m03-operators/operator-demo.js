/*
  module-03-operators/operators-demo.js
  Purpose: Demonstrate arithmetic, comparison, logical and ternary operators.
*/

const a = 10;
const b = 3;

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b (power) =", a ** b);

// Assignment
let x = 5;
x += 3; // x = x + 3
console.log("x after += 3:", x);

// Comparison
console.log("a == '10' =>", a == "10"); // true (coercion)
console.log("a === '10' =>", a === "10"); // false (strict)

// Logical
console.log("a > 5 && b < 5 =>", a > 5 && b < 5);
console.log("a > 20 || b < 5 =>", a > 20 || b < 5);

// Ternary
const parity = (a % 2 === 0) ? "even" : "odd";
console.log("a is", parity);

// Pre/post increment
let i = 0;
console.log("i (post)++:", i++); // prints 0 then i becomes 1
console.log("now i:", i);
console.log("++i:", ++i); // increments then prints


// Try it yourself:
// - Replace a and b with other values and predict outputs.
// - Use parentheses to change precedence: (a + b) * 2

console.log(3 + 4 * 5); // 3 + 20
// Expected output: 23

console.log(4 * 3 ** 2); // 4 * 9
// Expected output: 36

let c;
let d;

console.log((c = d = 5));
// Expected output: 5

//Few More Examles
console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order