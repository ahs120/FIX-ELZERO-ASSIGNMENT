let theNumber = 100020003000;

console.log(
  +Array.from(new Set([...theNumber.toString()]))
    .sort()
    .join("")
);
console.log(
  +[...new Set(theNumber + "")].filter((v) => v !== String(+[])).join("")
);
