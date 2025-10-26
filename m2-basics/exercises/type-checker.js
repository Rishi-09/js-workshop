/*
  module-02-basics/exercises/type-checker.js
  Purpose: Tiny utility to show typeof and extra checks.
*/


function checkType(value) {
  return typeof value;
}

console.log(checkType(7));           // "number"
console.log(checkType("JS"));        // "string"
console.log(checkType([1,2,3]));     // "object"
console.log(checkType(null));        // "object" (JS quirk)
