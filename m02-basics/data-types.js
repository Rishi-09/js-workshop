/*
  module-02-basics/data-types.js
  Purpose: Explore primitive & non-primitive types, typeof quirks.
*/


// Primitive data types
let myString = "Hello!";
let myNumber = 10;
let myBoolean = false;
let myNull = null;
let myUndefined;//undefined
let myBigInt = 1234567890123456789012345678901234567890n;
let mySymbol = Symbol("unique");

console.log("String:", myString, typeof myString);
console.log("Number:", myNumber, typeof myNumber);
console.log("Boolean:", myBoolean, typeof myUndefined);
console.log("Undefined:", myUndefined, typeof myUndefined);
console.log("Null (quirk):", myNull, typeof myNull); // typeof null === 'object' (historic)
console.log("BigInt:", myBigInt, typeof myBigInt);
console.log("Symbol:", mySymbol, typeof mySymbol);


// Non-primitives
let myArray = [1, 2, 3];
let myObject = { name: "Rishi", age: 20 };
function fn() { return "I am function"; }

console.log("Array:", myArray, typeof myArray); // typeof myArrayay === 'object'
console.log("Object:", myObject, typeof myObject);
console.log("Function:", fn, typeof fn);

// Distinguishing arrays
console.log("Array.isArray(arr):", Array.isArray(arr));


// Try it yourself:
// - Create an object with nested arrays and use console.log to inspect.
// - Use typeof on different values to see outputs.
