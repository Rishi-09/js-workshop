function MyError(msg) {
  this.name = "MyError";
  this.message = msg;
}
MyError.prototype = Error.prototype;
throw new MyError("Custom error occurred!");





// throw :  it is used to throw a custom error message 

try {
  let age = -5;
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
  console.log("Valid age:", age);
} 
catch (err) {
  console.error("Custom error caught:", err.message);
}
finally {
  console.log("Validation completed");
}




// throw error can be 

// 1. String
throw "Something went wrong!";

// 2. Number
throw 1021;

// 3. Boolean
throw true;

// 4. Object
throw { name: "CustomError", message: "Error occurred" };

// 5. Error Object (RECOMMENDED)
throw new Error("This is a proper error");

// 6. Custom Error Object
throw new SyntaxError("Invalid syntax");
throw new TypeError("Wrong type");
throw new RangeError("Value out of range");
