// Simple Calculator

function calculate(a, b, operator) {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  if (operator === "/") return b !== 0 ? a / b : "Error: divide by zero";
  return "Unknown operation";
}

console.log(calculate(10, 5, "+")); // 15
console.log(calculate(10, 0, "/")); // Error: divide by zero
