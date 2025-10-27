// let-const-template.js
// Demonstrates let/const and template literals

const name = "Rishi";
let score = 85;

console.log(`Student: ${name} — Score: ${score}`); // template literal

// const cannot be reassigned
// name = "New"; // TypeError

// using default parameter (shown as a simple function example)
// (functions taught in module 6 — but simple arrow here as demonstration)
const greet = (n = "Student") => `Hello, ${n}!`;
console.log(greet(name));
