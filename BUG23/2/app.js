let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

spNameRex = /os\d*o/gi;
console.log(specialNames.match(spNameRex));

// Output
// ['Os10O', 'OsO', 'Os100O']
