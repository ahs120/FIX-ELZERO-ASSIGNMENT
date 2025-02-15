const getData = (url) => {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.addEventListener("load", () => {
      if (req.readyState === 4 && req.status === 200) {
        resolve(JSON.parse(req.responseText));
      } else {
        reject(new Error("Sorry, No Data Was Found."));
      }
    });
    req.open("GET", url); // استخدام الـ parameter `url`
    req.send();
  });
};
