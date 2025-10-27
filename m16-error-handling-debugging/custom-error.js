function MyError(msg) {
  this.name = "MyError";
  this.message = msg;
}
MyError.prototype = Error.prototype;
throw new MyError("Custom error occurred!");
