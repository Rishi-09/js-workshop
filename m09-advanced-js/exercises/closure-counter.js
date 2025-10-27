/*
  closure-counter.js
  Exercise: Build a counter with private state and add methods increment/decrement/value.
*/

function createAdvancedCounter() {
  let count = 0;
  return {
    increment() { count += 1; return count; },
    decrement() { count -= 1; return count; },
    value() { return count; }
  };
}

const c = createAdvancedCounter();
console.log(c.increment()); // 1
console.log(c.increment()); // 2
console.log(c.decrement()); // 1
console.log("Current value:", c.value()); // 1
