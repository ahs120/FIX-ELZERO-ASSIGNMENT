//  * AI MADE

// function reorderAndReplace(chars) {
//   const numbers = chars.filter((e) => typeof e === "number");
//   //  استخراج الارقام
//   const nonNumbers = chars.filter((e) => typeof e !== "number");
//   // استخراج الحروف
//   const n = numbers.length;
//   // تسجيل عدد الارقام في متغير ('n')
//   const replacement = []; // empty array
//   for (let i = 0; i < n; i++) {
//     const index = nonNumbers.length ? i % nonNumbers.length : 0;
//     replacement.push(nonNumbers[index]);
//   }
//   return replacement.concat(nonNumbers);
// }

// // Test cases
// // let chars1 = ["A", "B", "C", "D", "E", 10, 15, 6];
// // console.log(reorderAndReplace(chars1)); // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// // let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// // console.log(reorderAndReplace(chars2)); // ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

// // let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];
// // console.log(reorderAndReplace(chars3)); // ["Z", "Y", "Z", "Y", "A", "D", "E"]

// function assignmentSix(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       arr.unshift(...arr.splice(i, 1));
//     }
//   }
//   console.log(arr);
//   const firstLetterIndex = arr.findIndex((ele) => typeof ele === "string");
//   arr = arr.copyWithin(0, firstLetterIndex, firstLetterIndex * 2);
//   console.log(arr);
//   console.log("#".repeat(50));
// }

// let arrayThree = ["Z", "Y", 10, "D", "E", 10, 1, 10, 20, 3, 4];
// console.log(reorderAndReplace(arrayThree));

// // Output => ["Z", "Y", "Z", "Y", "A", "D", "E"]
