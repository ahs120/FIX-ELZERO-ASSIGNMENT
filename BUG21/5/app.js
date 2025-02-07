const game = {
  titel: "YS",
  developer: "Falcom",
  resleases: {
    "oath in feighana": ["USA", "JPN"],
    "ark of napishtim": {
      US: "20 USD",
      JAP: "10USD",
    },
    origin: "usd 30",
  },
};

let {
  titel: t,
  developer: d,
  resleases: {
    "oath in feighana": [,],
    "ark of napishtim": { US: u_price, JAP: J_price },
    origin: or,
  },
} = game;
let [o, a] = Object.keys(game.resleases);

console.log(`
  ${t}
  ${d}
  ${J_price}
  ${u_price}
  ${or}
  ${o}
  ${a} 
  `);
