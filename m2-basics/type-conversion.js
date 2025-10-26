/*
  module-02-basics/type-conversion.js
  Purpose: Demonstrate explicit and implicit conversions.
*/

console.log("Type conversion examples:");


// Explicit conversion
// Explicit type conversion
let num = "42";
let numAsNumber = Number(num); // Converts string to number

let boolVal = Boolean(0); // false
let stringVal = String(false); // "false"

console.log(numAsNumber, boolVal, stringVal);

console.log("Number('abc') =>", Number("abc")); // NaN



// Implicit coercion

console.log("'5' + 2 =>", '5' + 2); // '52' (string concatenation)

console.log("'5' - 2 =>", '5' - 2); // 3 (number)

console.log("true + 1 =>", true + 1); // 2 (true -> 1)

// Common pitfalls
console.log("'' == 0 =>", '' == 0); // true (loose equality coercion)

console.log("'' === 0 =>", '' === 0); // false (strict equality)


// Best practice: use explicit conversions and strict equality (===)
console.log("Use Number() or parseInt() and triple equals (===)");

// Try it yourself:
// - Predict results for: '10' * '2', '10' / '2', '10' % '3'

