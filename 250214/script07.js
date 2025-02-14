function Book(title, price) {
  this.title = title;
  this.price = price;
}

Book.prototype.buy = function () {
  console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
};

const book1 = new Book("Javascript", 1000);
book1.buy();

// Book이라는 생성자 함수를 상속받는 새로운 생성자 함수를 만들기

function TextBook(title, price, major) {
  Book.call(this, title, price); // 기존 생성자 함수에서 상속받고자 하는 요소 찾아오기. this를 쓰면 이게 어느 생성자 함수의 this인지 가져오지 않으면 충돌남 그래서 this를 반드시 상속 받아야 함
  this.major = major; // 이 this는 TextBook의 this임 그런데 TextBook은 Book에서 상속 받은 것이니 결국 Book의 this임
}

TextBook.prototype.buyTextBook = function () {
  console.log(`${this.title} 전공서적, ${this.major}을 구매했습니다!`);
}; // 메서드 함수 생성.

Object.setPrototypeOf(TextBook.prototype, Book.prototype); //상속받는 관계를 정의해 줌 (하위객체.prototype, 상위객체.prototype)

const book2 = new TextBook("컴퓨터공학", 5000, "알고리즘");

console.log(book2);
book2.buyTextBook();
book2.buy(); // 생성자 함수 만든 다음 추가한 메서드 함수도 상속이 된다.
