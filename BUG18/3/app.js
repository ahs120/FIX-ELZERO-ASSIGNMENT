<<<<<<< HEAD
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
=======
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
>>>>>>> 8d269de0f99474c76781db8274df4f10dff208b9
