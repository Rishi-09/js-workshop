/*
  hoisting-and-scope.js
  Demonstrates hoisting, TDZ, and scope chain.
*/

// Hoisting with var:
console.log(a); // undefined
var a = 5;

// let/const are NOT hoisted the same way:
// console.log(b); // ReferenceError
let b = 10;

// Scope example:
function outer() {
  let msg = "outer";
  function inner() {
    console.log(msg); // "outer"
  }
  inner();
}
outer();


// Hoisting with var (hoisted and initialised to undefined)
console.log("hoistedVar before declaration:", hoistedVar); // undefined
var hoistedVar = "I am hoisted";

// Hoisting with function declaration (hoisted fully)
hoistedFunction(); // works
function hoistedFunction() {
  console.log("I was hoisted as a function declaration");
}

// Function expression not hoisted fully (would error if called before)
try {
  notHoisted(); // ReferenceError if using let/const; TypeError if var + undefined
} catch (e) {
  console.log("Calling notHoisted before init results in:", e && e.name);
}
var notHoisted = function () {
  console.log("Function expression - not hoisted like declaration.");
};

// Temporal Dead Zone (TDZ) with let/const
try {
  console.log(tempLet); // ReferenceError in many engines (TDZ)
} catch (e) {
  console.log("Accessing let before init ->", e && e.name);
}
let tempLet = 10;

// Scope chain example
let globalName = "Global";

function outer() {
  let outerVar = "Outer";
  function inner() {
    let innerVar = "Inner";
    console.log("Access innerVar:", innerVar);
    console.log("Access outerVar from inner:", outerVar); // lexical lookup
    console.log("Access globalName from inner:", globalName);
  }
  inner();
}
outer();
