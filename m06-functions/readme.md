# Module 06 — Functions

## Goal
Understand how to write reusable code blocks (functions), manage scope, and work with callbacks.

## What is a Function?

- A function is a reusable block of code that does a specific task.

## Function Declaration

```
    function greet(name) {
    console.log("Hello, " + name);
    }
    
```

## Function Expression

- Assign a function to a variable.

## Arrow Functions

- Shorter syntax introduced in ES6.

## Parameters vs Arguments

- **Parameter:** Variable in function definition.
- **Argument:** Actual value passed to function.

## Return Statement

- Gives back a value.

## Scope

- Where variables/functions are available (inside function = local scope).

## Higher Order Functions

- Take or return other functions.

---


## Concepts
- **Function declaration:** `function add(a, b) { return a + b; }`
- **Function expression:** `const add = function(a,b) { ... }`
- **Arrow functions:** `const add = (a, b) => a + b` (lexical `this`, concise)
- **Parameters & arguments:** default parameters, rest `...args`
- **Return statement**: ends function and returns value
- **Hoisting:** function declarations are hoisted; function expressions are not
- **Scope:** global vs local vs block scope
- **Closures:** inner function retains access to outer variables
- **Higher-order functions:** functions that take or return functions
- **Callbacks:** pass functions to be executed later (e.g., event handlers)

## Exercises
- Build a counter using closures.
- Refactor small code into pure functions.
