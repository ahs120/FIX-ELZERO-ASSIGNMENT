let num = document.querySelector("form input[name='elements']");
let text = document.querySelector("form input[name='texts']");
let select = document.querySelector("form select[name='type']");
let submit = document.querySelector("form input[name='create']");
let results = document.querySelector("form div.results");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelectorAll(".error-msg").forEach(function (e) {
    e.remove();
  });
  let numV = num.value;
  if (numV <= 0 || isNaN(numV)) {
    let msg = document.createElement("p");
    msg.classList.add("error-msg");
    msg.innerHTML = "add a value";
    num.parentNode.insertBefore(msg, num.nextSibling);
  }

  let textV = text.value;
  if (textV == "") {
    let msg = document.createElement("p");
    msg.classList.add("error-msg");
    msg.innerHTML = "add a value";
    text.parentNode.insertBefore(msg, text.nextSibling);
    return;
  }
  let selV = select.value;
  results.innerHTML = ``;
  for (let i = 1; i <= numV; i++) {
    let ele = document.createElement(`${selV}`);
    ele.classList.add("box");
    ele.setAttribute("title", "Element");
    ele.setAttribute("id", `id-${i}`);
    ele.innerHTML = `${textV}`;
    results.appendChild(ele);
  }
});

// let num = document.querySelector("form input[name='elements']");
// let text = document.querySelector("form input[name='texts']");
// let select = document.querySelector("form select[name='type']");
// let submit = document.querySelector("form input[name='create']");
// let results = document.querySelector("form div.results");

// submit.addEventListener("click", function (e) {
//   e.preventDefault();

//   let numV = Number(num.value.trim()); // Convert to number and remove spaces
//   let textV = text.value.trim();
//   let selV = select.value;

//   // Remove existing error messages
//   let existingMsg = document.querySelector(".error-msg");
//   if (existingMsg) existingMsg.remove();

//   // Validation for num input
//   if (numV <= 0 || isNaN(numV)) {
//     let msg = document.createElement("p");
//     msg.innerHTML = "Please enter a valid number greater than 0.";
//     msg.classList.add("error-msg"); // Adding class for easy removal
//     msg.style.color = "red";
//     num.parentNode.insertBefore(msg, num.nextSibling); // Insert message after input field
//   }

//   if (textV == "") {
//     let msg2 = document.createElement("p");
//     msg2.innerHTML = "Please enter ant string";
//     msg2.classList.add("error-msg"); // Adding class for easy removal
//     msg2.style.color = "red";
//     text.parentNode.insertBefore(msg2, text.nextSibling); // Insert message after input field
//   }

//   results.innerHTML = ""; // Clear previous results

//   for (let i = 1; i <= numV; i++) {
//     let ele = document.createElement(selV);
//     ele.classList.add("box");
//     ele.setAttribute("title", "Element");
//     ele.setAttribute("id", `id-${i}`);
//     ele.innerHTML = textV || `Element ${i}`; // Default text if empty
//     results.appendChild(ele);
//   }
// });
