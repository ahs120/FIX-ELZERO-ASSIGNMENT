let num = document.querySelector("span.num");
let inNum = document.querySelector("input[type='number']");

inNum.addEventListener("blur", () => {
  let inputV = parseInt(inNum.value);
  if (isNaN(inputV)) {
    alert("a7a ya 3am");
    return;
  }
  let i = inputV;
  num.innerHTML = i;
  let interval = setInterval(() => {
    if (i <= 0) {
      clearInterval(interval);
      inNum.value = "";
      return;
    }
    i--;
    num.innerHTML = i;
  }, 1000);
});
