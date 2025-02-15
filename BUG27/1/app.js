const getData = (url) => {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.addEventListener("load", (event) => {
      if (req.readyState === 4 && req.status === 200) {
        resolve(JSON.parse(req.responseText));
      } else {
        reject(new Error("Sorry, No Data Was Found."));
      }
    });
    req.open("GET", url);
    req.send();
  });
};
getData("json.json")
  .then((res) => {
    res.length = 5;
    return res;
  })
  .then((res) => {
    for (let post of res) {
      let div = document.createElement("div");
      div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.description}</p>
      `;
      document.body.appendChild(div);
    }
  })
  .catch((rej) => {
    document.body.appendChild(document.createTextNode(rej));
  });
