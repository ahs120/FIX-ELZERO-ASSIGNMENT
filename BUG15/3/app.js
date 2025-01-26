let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero

let word = myArray
  .reduce((a, b) => a.concat(b), [])
  .reduce((a, b) => `${a}${b}`);

console.log(word);

let word2 = myArray.flat().join("");
console.log(word2);
