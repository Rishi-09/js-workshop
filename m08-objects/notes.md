# Module 08 — Objects

## Goal
Learn how to represent and work with structured data using objects — the backbone of JavaScript programs.

## Key Concepts
- **Object creation:** object literal `{}`, `new Object()`, constructor functions, classes
- **Access properties:** dot `obj.key` vs bracket `obj['key']` (use bracket for dynamic keys)
- **Add/update/delete properties:** `obj.newProp = value`, `delete obj.key`
- **this keyword:** refers to the calling context — varies by how function is called
- **Methods:** functions stored as object values
- **Object destructuring:** extract values quickly `const {a, b} = obj`
- **Built-in utilities:** `Object.keys()`, `Object.values()`, `Object.entries()`
- **Copying & merging:** shallow copy using spread `{...obj}`, `Object.assign()`. For deep copy use structuredClone (modern) or JSON methods (caveats).
- **Reference vs value:** objects are reference types — assignments copy references.

## Learning outcomes
- Create and manipulate objects
- Use destructuring and built-in utilities
- Understand references and shallow copy pitfalls

## Exercises
- Student record management object
- Merge config objects safely
