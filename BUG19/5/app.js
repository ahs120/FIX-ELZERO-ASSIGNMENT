<<<<<<< HEAD
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
      window.open(
        "https://elzero.org",
        "popupWindow",
        "width=600,height=400,scrollbars=yes,resizable=yes"
      );
      clearInterval(interval);
      inNum.value = "";
      return;
    }
    i--;
    num.innerHTML = i;
  }, 1000);
});
=======
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
      window.open(
        "https://elzero.org",
        "popupWindow",
        "width=600,height=400,scrollbars=yes,resizable=yes"
      );
      clearInterval(interval);
      inNum.value = "";
      return;
    }
    i--;
    num.innerHTML = i;
  }, 1000);
});
>>>>>>> 8d269de0f99474c76781db8274df4f10dff208b9
