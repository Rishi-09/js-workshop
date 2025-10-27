class Car {
  drive() { console.log('Car drives.'); }
}
class ElectricCar extends Car {
  charge() { console.log('Charging battery.'); }
}

const tesla = new ElectricCar();
tesla.drive();
tesla.charge();
