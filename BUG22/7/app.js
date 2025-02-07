let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(numsTwo));
console.log(Array.from([numsOne, numsTwo]).flat());
console.log(Array.from(new Set([numsOne, numsTwo].flat())));
console.log(Array.of(...numsOne, ...numsTwo));

[1, 2, 3, 4, 5, 6];
