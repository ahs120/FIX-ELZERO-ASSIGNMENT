const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["reading", "swimming", "programming"],
};

const {
  age: a,
  working: w,
  country: c,
  hobbies: [h1, , h2],
} = member;
console.log(`my ge is ${a} , and iam ${w ? "" : "Not"} , Working .`);
console.log(`i live in ${c}`);
console.log(`and my hobbies ${h1} , ${h2}`);
