
/*
  closures.js
  Demonstrates closures and typical use-cases (counter factory).
*/

console.log(rex);//undefind
var rex=0;//var add itself to the window object
let a = 0;
adder(2,3);
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2


// Counter factory returns a function that remembers 'count'
function createCounter() {
  // This variable is private to the returned function due to closure
  let count = 0;
  // returned function closes over 'count'
  return function () {
    count += 1;
    return count;
  };
}

const counterA = createCounter();
console.log("counterA()", counterA()); // 1
console.log("counterA()", counterA()); // 2

const counterB = createCounter();
console.log("counterB()", counterB()); // 1  (separate closure)

// Closure-based privacy example
function makeGreeting(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}
const sayHello = makeGreeting("Hello");
console.log(sayHello("Rishi")); // Hello, Rishi!

// Try it: use closure to create a function that adds a fixed number
function adder(x) {
  return function (y) {
    return x + y;
  };
}
const add5 = adder(5);
console.log("add5(10) ->", add5(10)); // 15

//Execution context example
let globalvar  = "hello";
function outer(){
  let outervar = "world";
  function inner(){
    let cd = "dvd";
    console.log(globalvar);
    console.log(outervar);
  }
  inner();
}
outer();


//Lexical scope example
function father() {
  let money = 1000;

  function child() {
    console.log("Child can use father's money:", money);
  }

  child();
}

father();


