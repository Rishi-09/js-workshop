// destructuring-spread.js
const arr = [1, 2, 3, 4];
const [first, second, ...rest] = arr;
console.log(first, second, rest);

const obj = { a: 1, b: 2, c: 3 };
const { a, ...others } = obj;
console.log(a, others);

// spread to copy arrays
const copy = [...arr];
console.log("copy equals arr but different ref:", copy, copy === arr);
