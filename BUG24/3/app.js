// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.username = username;
    let cardStr = String(card);
    this.#c = cardStr.match(/\d{1,4}/g).join("-"); // استخدام _c للإشارة إلى أن هذه الخاصية خاصة
  }

  // getter لجلب البيانات المنسقة
  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.#c}`;
  }

  // منع الوصول المباشر إلى card property
  get c() {
    return undefined;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
