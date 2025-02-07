let setOfNumbers = new Set().add(10);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
setOfNumbers.forEach((v) => {
  if (v === 2) console.log(v);
});
