let start = document.querySelector("input[start]");
let end = document.querySelector("input[end]");
let jump = document.querySelector("input[jump]");
let re = document.querySelector("div.re");
let btn = document.querySelector("button[click]");

btn.addEventListener("click", () => {
  re.innerHTML = "";
  let startV = parseInt(start.value);
  let endV = parseInt(end.value);
  let jumpV = parseInt(jump.value);
  for (let i = startV; i <= endV; i += jumpV) {
    let div = document.createElement("div");
    div.className = `id-${i}`;
    div.innerHTML = `${i}`;
    re.appendChild(div);
  }
});
