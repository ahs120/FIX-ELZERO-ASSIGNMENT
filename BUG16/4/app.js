// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = 3;

for (let gameNames of Object.keys(myFavGames)) {
  let game = myFavGames[gameNames];

  console.log(`The Game Name Is ${gameNames}`);
  console.log(`The Publisher Is ${game.publisher}`);
  console.log(`The Price Is ${game.price}`);

  // Check If Nested Object Has Property (bestThree)
  if (game.hasOwnProperty("bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${game.bestThree.one}`);
    console.log(`Second => ${game.bestThree.two}`);
    console.log(`Third => ${game.bestThree.three}`);
  }
  console.log("#".repeat(20));
}

// Ouput

("The Game Name Is Trinity Universe");
("The Publisher Is NIS America");
("The Price Is 40");
("####################");
("The Game Name Is Titan Quest");
("The Publisher Is THQ");
("The Price Is 50");
("- Game Has Releases");
("First => Immortal Throne");
("Second => Ragnarök");
("Third => Atlantis");
("####################");
("The Game Name Is YS");
("The Publisher Is Falcom");
("The Price Is 40");
("- Game Has Releases");
("First => Oath in Felghana");
("Second => Ark Of Napishtim");
("Third => origin");
("####################");
