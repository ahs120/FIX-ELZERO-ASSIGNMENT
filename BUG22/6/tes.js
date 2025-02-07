let chars = [
  "Z",
  "Y",
  10,
  "D",
  "E",
  10,
  1,
  10,
  20,
  3,
  4,
  "w",
  "r",
  "u",
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
];

// by ahmed
function getRes(chart) {
  const num = chart.filter((e) => typeof e === "number");
  const notNum = chart.filter((e) => typeof e !== "number");
  const n = num.length;
  const ress = [];
  for (let i = 0; i < n; i++) {
    const index = notNum.length ? i % notNum.length : 0;
    ress.push(notNum[index]);
  }
  console.log(ress.concat(notNum));
}
console.log(chars);

getRes(chars);
