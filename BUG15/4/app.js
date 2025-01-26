let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let res = numsAndStrings
  .filter((x) => (typeof x === "number" ? x : ""))
  .map((e) => -e);
