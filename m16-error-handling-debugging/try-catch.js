// try-catch.js
try {
  // Simulate an error
  const x = y + 1; // ReferenceError: y is not defined
} catch (err) {
  console.error("Caught error:", err && err.message);
} finally {
  console.log("Finally always runs");
}
