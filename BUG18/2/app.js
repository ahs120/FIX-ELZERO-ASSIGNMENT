let add = document.querySelector("input.classes-to-add");
let remove = document.querySelector("input.classes-to-remove");
let current = document.querySelector("div.current.element");
let div = document.querySelector("div.classes-list div");
let msg = document.createElement("p");
msg.innerHTML = "كل سنه وانت طيب :>";

function updateClasses() {
  div.innerHTML = ""; // Clear the current list
  current.classList.forEach((e) => {
    let span = document.createElement("span");
    span.setAttribute("title", e);
    span.className = e;
    span.textContent = e;
    div.append(span);
  });

  if (current.classList.length === 0) {
    div.appendChild(msg);
  } else {
    msg.remove();
  }
}

function addClass() {
  let classV = add.value.trim().split(" ");
  classV.forEach((e) => {
    if (e && !current.classList.contains(e)) {
      current.classList.add(e);
    }
  });
  add.value = "";
  updateClasses();
}

function removeClass() {
  let classV = remove.value.trim().split(" ");
  classV.forEach((e) => {
    if (e && current.classList.contains(e)) {
      current.classList.remove(e);
    }
  });
  remove.value = "";
  updateClasses();
}

add.addEventListener("blur", addClass);
remove.addEventListener("blur", removeClass);

// Initial update
updateClasses();
