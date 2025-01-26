let nums = [2, 12, 11, 5, 10, 1, 99];

// 500

let res = nums.reduce((acc, cur) => (cur % 2 === 0 ? acc * cur : acc + cur));
console.log(res);
