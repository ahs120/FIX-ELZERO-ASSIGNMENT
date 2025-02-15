let data = document.getElementById("data");
let req = new XMLHttpRequest();
req.open("GET", "json.json");
req.send();
req.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const mainData = JSON.parse(this.responseText);
    for (let i of mainData) {
      let div = document.createElement("div");
      div.innerHTML = `
        <h2>${i.title}</h2>
        <p>${i.body}</p>
        <p>Author: ${i.author}</p>
        <p>Category: ${i.category}</p>
      `;
      data.appendChild(div);
    }
  }
};
