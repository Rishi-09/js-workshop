// constructor-prototype.js
function Vehicle(make, model) {
  this.make = make;
  this.model = model;
}

Vehicle.prototype.info = function () {
  return `${this.make} ${this.model}`;
};

const car = new Vehicle("Toyota", "Corolla");
console.log(car.info());
