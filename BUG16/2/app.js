// Method One
// Create Your Object Here
let objMethodOne = {
  property: "test",
};

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = new Object({
  property: "test2",
});

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = Object.create({
  property: "test3",
});
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({
  property: "test4 ",
});
console.log(objMethodFour.property); // "Method Four"
