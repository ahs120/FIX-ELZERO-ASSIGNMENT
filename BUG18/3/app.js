let div = document.querySelector("div.our-element");
let p = document.querySelector("p");
let startDiv = document.createElement("div");
let endDiv = document.createElement("div");
startDiv.innerHTML = "Start";
endDiv.innerHTML = "End";
startDiv.setAttribute("Date-Value", "Start");
endDiv.setAttribute("Date-Value", "End");
// p.remove();

div.parentNode.prepend(startDiv);
div.parentNode.append(endDiv);
