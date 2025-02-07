const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};
Object.defineProperties(myObj, {
  id: {
    enumerable: false,
  },
  score: {
    writable: false,
  },
  country: {
    enumerable: false, // Will not appear in loop
    configurable: true,
  },
});
delete myObj.country;
myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}
