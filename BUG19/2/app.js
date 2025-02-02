let popUp = document.createElement("div");
popUp.className = "popup";

popUp.innerHTML = `
      <div>
        <div class="holder">
          <span class="del">x</span>
          <h1>Welcome</h1>
          <p>Welcome From Elzero</p>
        </div>
      </div>
`;
setTimeout(function () {
  document.body.appendChild(popUp);
  let del = document.querySelector("span.del");
  del.addEventListener("click", (e) => {
    del.parentElement.parentElement.parentElement.remove();
  });
}, 5000);
