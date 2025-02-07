let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipRex = /^([0-9A-Za-z]{1,4}:){7}([0-9A-Za-z]{1,4})/g;
console.log(ip.match(ipRex));
