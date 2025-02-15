let req = new XMLHttpRequest();
req.open("GET", "json.json");
req.send();
req.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log("JSON Object Content Here");
    console.log("Data Loaded");
  }
};
