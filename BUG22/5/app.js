let theName = "Elzero";

console.log(Array.from(theName)); // 1
console.log(new Set(theName)); //2
console.log(new Array(...theName)); //3
console.log([...theName]); // 4
console.log(theName.split("")); // 5
console.log(Object.values(theName)); //6
console.log([...new Set(theName)]); //7
console.log([].concat([...theName]));
console.log(theName.match(/./g));

// ["E", "l", "z", "e", "r", "o"];
