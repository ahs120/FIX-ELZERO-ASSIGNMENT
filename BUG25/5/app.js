const t0 = performance.now();
const d1 = new Date();

for (let i = 0; i < 100000; i++) document.write(`${i}<br />`);
const t1 = performance.now();
const d2 = new Date();
console.log(d2 - d1);

console.log(t1 - t0);
