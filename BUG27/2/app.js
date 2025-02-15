async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    data.length = 5;
    for (let post of data) {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.description}</p>
      `;
      document.body.prepend(div);
      div;
    }
  } catch (rej) {
    console.error(rej);
  }
}

fetchData("json.json");
