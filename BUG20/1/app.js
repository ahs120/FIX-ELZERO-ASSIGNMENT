let text = document.querySelector("h1#text");
let selectFont = document.getElementById("font-select");
let selectColor = document.getElementById("color-select");
let selectSize = document.getElementById("size-select");

selectFont.addEventListener("change", applyChange);
selectColor.addEventListener("change", applyChange);
selectSize.addEventListener("change", applyChange);
getCss();

function applyChange() {
  text.style.fontFamily = selectFont.value;
  text.style.fontSize = selectSize.value;
  text.style.color = selectColor.value;
  setCss();
}

function setCss() {
  localStorage.setItem("fontFamily", selectFont.value);
  localStorage.setItem("fontSize", selectSize.value);
  localStorage.setItem("fontColor", selectColor.value);
}

function getCss() {
  let locFont = localStorage.getItem("fontFamily");
  let locSize = localStorage.getItem("fontSize");
  let locColor = localStorage.getItem("fontColor");
  if (locFont && locSize && locColor) {
    text.style.fontFamily = locFont;
    text.style.fontSize = locSize;
    text.style.color = locColor;
    selectFont.value = locFont;
    selectColor.value = locColor;
    selectSize.value = locSize;
  }
}
