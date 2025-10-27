# Module 09 — Advanced JavaScript Concepts

## Overview
This module explains the deeper internals of JavaScript: execution order, variable/function hoisting, scope & lexical environment, closures, `this` keyword and its binding rules, prototypes & inheritance, the event loop, and memory management.

### Topics Covered
1. **Hoisting**
   - What is hoisting for variables and functions?
   - Difference: `var` hoisted (initialised as `undefined`), `let/const` in TDZ.
   - Function declaration vs function expression hoisting.

2. **Scope Chain & Lexical Scope**
   - Local (function) scope, block scope, global scope.
   - How lookup works (lexical scoping).

3. **Closures (in-depth)**
   - Inner functions retaining access to outer variables.
   - Practical uses: data privacy, partial application, function factories.

4. **this Binding (call, apply, bind)**
   - Default binding, implicit (object) binding, explicit (call/apply/bind), new binding.
   - Arrow functions and lexical `this`.

5. **Prototypes & Inheritance**
   - Prototype chain, `__proto__` vs `prototype`.
   - Using prototype methods and property lookup.

6. **Event Loop, Call Stack, Web APIs**
   - Call stack, task queue (macrotasks), microtasks (promises), how setTimeout and promises interleave.

7. **Execution Context**
   - Creation & execution phases, activation object (scope), `this` value.

8. **Memory Management**
   - Garbage collection basics (reference counting, mark-and-sweep).

### Learning Outcomes
- Explain hoisting and scope.
- Build closures safely and use bind/call/apply.
- Trace prototype lookup and event loop behavior.

### Mini Projects / Exercises
- Closure-based counter.
- Custom `bind` polyfill.
- Visualize event loop using timed logs.
