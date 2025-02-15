let req = new XMLHttpRequest();
req.open("GET", "json.json");
req.send();
req.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const mainData = JSON.parse(this.responseText);
    for (let i of mainData) {
      if (i.hasOwnProperty("category")) {
        i.category = "ALL";
        console.log(i);
      }
    }
    const updateDate = JSON.stringify(mainData);
    console.log(updateDate);
  }
};
