/*
  module-07-arrays/destructuring.js
  Purpose: Demonstrate array destructuring and swapping.
*/


let nums = [10, 20, 30];
let [a, b, c] = nums;

console.log(a, b, c); // 10 20 30

// Use rest with destructuring
const [first, second, ...rest] = arr;
console.log("first:", first);
console.log("second:", second);
console.log("rest:", rest)


const arr = [10, 20, 30, 40];

// Destructure first two


// Default values
const [num1 = 1, num2 = 2, num3 = 3] = [100];
console.log("Defaults:", a, b, c);

// Swap using destructuring
let x = 1, y = 2;
[x, y] = [y, x];
console.log("Swapped:", x, y);

// Try it:
// - Destructure nested arrays.
