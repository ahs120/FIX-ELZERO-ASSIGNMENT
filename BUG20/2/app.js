const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const age = document.getElementById("age");
const country = document.getElementById("country");
const submit = document.querySelector("input[type='submit']");
getStorge();
fullName.addEventListener("blur", setStorge);
email.addEventListener("blur", setStorge);
age.addEventListener("blur", setStorge);
country.addEventListener("change", setStorge);

function setStorge() {
  sessionStorage.setItem("fullName", fullName.value);
  sessionStorage.setItem("email", email.value);
  sessionStorage.setItem("age", age.value);
  sessionStorage.setItem("country", country.value);
}
function getStorge() {
  if (sessionStorage.length > 0) {
    fullName.value = sessionStorage.getItem("fullName");
    email.value = sessionStorage.getItem("email");
    age.value = sessionStorage.getItem("age");
    country.value = sessionStorage.getItem("country");
  }
}
