/*
  module-07-arrays/array-methods.js
  Purpose: Demonstrate common array methods and their behavior.
*/

const nums = [3, 1, 4, 1, 5, 9];

console.log("Original:", nums);

// push/pop
nums.push(2);
console.log("After push:", nums);
nums.pop();
console.log("After pop:", nums);

// shift/unshift
nums.unshift(0);
console.log("After unshift:", nums);

nums.shift();
console.log("After shift:", nums);

// map -> multiply by 2 (non-mutating)
const doubled = nums.map(n => n * 2);
console.log("Doubled (map):", doubled);

// filter -> odd numbers
const odds = nums.filter(n => n % 2 === 1);
console.log("Odds (filter):", odds);

// reduce -> sum
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log("Sum (reduce):", sum);

// find & includes
console.log("Find > 3:", nums.find(n => n > 3));
console.log("Includes 4:", nums.includes(4));

// sort (careful: mutates)
const sorted = [...nums].sort((a, b) => a - b); // copy then sort
console.log("Sorted copy:", sorted);
console.log("Original after copy-sort:", nums);

// Try it yourself:
// - Use reduce to compute average.
