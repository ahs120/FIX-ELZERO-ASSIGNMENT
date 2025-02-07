// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }

class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price || "UNKnow";
  }
  run() {
    console.log("Car Is Running Now");
  }
  stop() {
    console.log("Car Is Stooped ");
  }
}
let carOne = new Car("MG", 2022);
console.log(
  `Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`
);
carOne.run();
carOne.stop();
