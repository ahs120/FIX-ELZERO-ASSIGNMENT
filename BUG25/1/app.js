let mydata = new Date("2004 ,8,7");
let now = new Date();
mydata = now - mydata;
console.log(`mse :${mydata}`);
console.log(`sec :${parseInt(mydata / 1000)}`);
console.log(`min :${parseInt(mydata / 1000 / 60)}`);
console.log(`hou :${parseInt(mydata / 1000 / 60 / 60)}`);
console.log(`day :${parseInt(mydata / 1000 / 60 / 60 / 24)}`);
console.log(`mon :${parseInt(mydata / 1000 / 60 / 60 / 24 / 30)}`);
console.log(`yer :${parseInt(mydata / 1000 / 60 / 60 / 24 / 30 / 12)}`);
