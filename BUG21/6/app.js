let chosen = document.getElementById("chosen");

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 20, available: false, skills: ["Java", "Python"] },
  { title: "sayed", age: 39, available: true, skills: ["next", "node"] },
];

chosen.addEventListener("blur", () => {
  let {
    title: n,
    age: a,
    available: v,
    skills: [s1, s2],
  } = myFriends[chosen.value];

  let fr = document.createElement("div");
  fr.innerHTML = `
  <p>Name is : ${n}</p>
  <p>Age is ${a}</p>
  <p>${v ? "available" : "not available"}</p>
  <p> ${s1} || ${s2}</p>
  `;
  let viwer = document.querySelector("div.viwer");
  viwer.innerHTML = "";
  viwer.appendChild(fr);
});
