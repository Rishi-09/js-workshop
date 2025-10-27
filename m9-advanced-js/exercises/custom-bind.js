/*
  custom-bind.js
  Exercise: Create a small polyfill for Function.prototype.bind
*/

if (!Function.prototype.myBind) {
  Function.prototype.myBind = function (thisArg, ...boundArgs) {
    const fn = this;
    return function (...args) {
      return fn.apply(thisArg, [...boundArgs, ...args]);
    };
  };
}

function say(prefix, name) {
  console.log(prefix + " " + name);
}
const sayHiToRishi = say.myBind(null, "Hi");
sayHiToRishi("Rishi");

// Custom bind implementation
function customBind(fn, context) {
  return function(...args) {
    return fn.apply(context, args);
  };
}

function greet(msg) {
  return msg + ", " + this.name;
}

const person = { name: "Amit" };
const boundGreet = customBind(greet, person);

console.log(boundGreet("Hello")); // Hello, Amit
