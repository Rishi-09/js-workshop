// Module 4: Control Flow - Examples
// Run this file with: node module_4_examples.js

console.log("--- Slide 3: if / if...else ---");
let temp = 35;
if (temp > 30) {
  console.log("It's a hot day!");
}

let age = 17;
if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You cannot vote yet.");
}

console.log("\n--- Slide 4: if...else if ladder ---");
let score = 82;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

console.log("\n--- Slide 5: Nested if-else ---");
let isLoggedIn = true;
let userRole = "admin";
if (isLoggedIn) {
  console.log("Welcome! Checking credentials...");
  // Nested if-else
  if (userRole === "admin") {
    console.log("You have full access.");
  } else {
    console.log("You have limited access.");
  }
} else {
  console.log("Please log in.");
}

console.log("\n--- Slide 7: Truthy/Falsy Pitfalls ---");
let username = ""; // Falsy
if (username) {
  console.log("Welcome!");
} else {
  console.log("Please enter a username.");
}

let itemsInCart = 0; // Falsy
if (itemsInCart) {
  console.log("Proceed to checkout");
} else {
  console.log("Your cart is empty.");
}

let loggedInUser = null; // Falsy
let currentUser = loggedInUser || "Guest";
console.log("Current user:", currentUser);

console.log("\n--- Slide 8: switch Statement ---");
let day = "Tuesday";
switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Tuesday":
    console.log("Taco Tuesday!");
    break;
  case "Friday":
    console.log("Weekend is close!");
    break;
  default:
    console.log("It's some other day.");
}

console.log("\n--- Slide 9: Ternary Operator ---");
let ageTernary = 20;
// Regular if-else
let canVote;
if (ageTernary >= 18) {
  canVote = "Yes, can vote.";
} else {
  canVote = "No, cannot vote.";
}
console.log("Using if-else:", canVote);

// Ternary Operator (Same Logic)
let canVoteTernary = (ageTernary >= 18) ? "Yes, can vote." : "No, cannot vote.";
console.log("Using ternary:", canVoteTernary);
