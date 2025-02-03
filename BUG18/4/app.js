let div = document.querySelector("div");

const test = div.innerHTML.split("\n");
for (let i = 0; i < test.length; i++) {
  if (test[i].trim() === "Elzero") {
    console.log(test[i].trim());
  } else {
    continue;
  }
}
