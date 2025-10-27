# Module 02 — Basics of JavaScript

## Goal
Understand JavaScript syntax, variables, constants, and data types — the fundamental building blocks you use every day.

## Topics & Definitions

### Syntax & Identifiers
- **Syntax**: The rules that define how to write valid JavaScript code (statements, semicolons optional, line breaks).
- **Identifiers**: Names for variables, functions, and objects. Must start with a letter, underscore `_`, or dollar `$`. Case-sensitive.

### Comments
- Single-line: `// this is a comment`
- Multi-line: `/* multi-line comment */`
Use comments to explain code for others (and future you).

### Variables & Constants
- `var` — function-scoped, older. Avoid for modern code.
- `let` — block-scoped, can be reassigned.
- `const` — block-scoped, cannot be reassigned (but objects/arrays inside can be mutated).
**Best practice**: Use `const` by default, `let` only when reassignment is needed.

### Naming Conventions
- `camelCase` for variables/functions: `firstName`
- `PascalCase` for constructors/classes: `BubbleSort`
- `snake_case` for variables/functions/modules : `module01_introduction_to_js`
- `kebab-case` for URLs/file-names/classes in html : `btn-primary`
- Avoid reserved words and very short names.

### Data Types
- **Primitive types**: `String`, `Number`, `Boolean`, `Undefined`, `Null`, `Symbol`, `BigInt`
- **Non-primitive**: `Object` (includes Arrays and Functions)
- **typeof** operator: returns a string describing the type — note `typeof null` is `"object"` (a historical quirk).

### Type Conversion & Coercion
- **Explicit conversion**: use `String()`, `Number()`, `Boolean()`.
- **Implicit coercion**: JavaScript sometimes converts types automatically (`'5' + 2 === '52'` but `'5' - 2 === 3`).
Watch out for `NaN` (Not-a-Number) and truthy/falsy values.

## Learning outcomes
- Use `let` and `const` correctly.
- Recognize JS types and convert safely.
- Avoid common coercion pitfalls.

## Exercises
- Type checker app that prints `typeof` of inputs.
- Temperature converter (Celsius ↔ Fahrenheit).

## Tips for teachers
- Show `typeof null` and explain it’s a quirk.
- Encourage experiments: `console.log('5' - '2')`, `'5' + 2`.
