let userName = "Elzero";
console.log(userName[0].toLocaleLowerCase()); // e
console.log(userName.slice(0, 1).toLocaleLowerCase()); // e
console.log(userName.charAt(0).toLocaleLowerCase()); // e
console.log(userName[userName.indexOf("E")].toLocaleLowerCase()); // e
console.log(userName.substring(0, 1).toLocaleLowerCase()); // e
console.log(userName.substring(-5, 1).toLocaleLowerCase().repeat(3)); // eee
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
