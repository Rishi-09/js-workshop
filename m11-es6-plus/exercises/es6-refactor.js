// es6-refactor.js
// Refactor old code using ES6 features
var x = [1,2,3];
var y = x.map(function(n){ return n*2; });
// Refactor: use let/const and arrow
const arr = [1,2,3];
const doubled = arr.map(n => n * 2);
console.log(doubled);
