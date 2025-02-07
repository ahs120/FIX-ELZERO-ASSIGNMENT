let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

// let re = /(https?:\/\/(w{3}.)?)?\w+.\w+(\.)?/gi;
let re =
  /^(https?:\/\/)?(?:www\.)?([a-z0-9-]+(?:\.[a-z0-9-]+)*)(?::(\d+))?(\/[^?#]*)?(?:\?([^#]*))?/gi;
let urlRe = /^(https?:\/\/)?(w{3}\.)?[a-zA-Z0-9-]+\.[A-Za-z]+.*/gi;
console.log(url1.match(urlRe));
console.log(url2.match(urlRe));
console.log(url3.match(urlRe));
console.log(url4.match(urlRe));
console.log(url5.match(urlRe));
