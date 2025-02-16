// C언어나 JAVA에서는 생성자 함수를 Class로 쓰고 있음. 그래서 CLASS가 생성됨
// 2015년에 만들어짐.

class Book {
  constructor(title, page, price, author, published) {
    this.title = title;
    this.page = page;
    this.price = price;
    this.author = author;
    this.published = published;
  }
  question = function () {
    console.log(`${this.author}의 따끈한 신간 도서입니다!`);
  }; // 메서드 함수 넣기
} // class 는 예약어다. / 이름을 반드시 대문자로 시작 / constructor() 생성자라는 함수가 정해져 있다. 무조건 써야 함.
// 매서드 함수는 다르게 써야 함.

const book1 = new Book("Javascript2", 360, 32000, "박세진", "2025-04-22"); // Book은 생성자 함수
console.log(book1);
book1.question();

// 기존의 생성자 함수는 객체 안에 들어가야 하는 키 값이 많아질 경우 가독성이 떨어짐.
// 생성자 함수와 클래스의 차이점
// 01. 메서드 함수가 별도로 분리가 됨
// 02. 생성자 함수와 시각적으로 큰 차이가 없음.
// 03. 생성된 순서에 따라 상속에 차이가 좀 있음.
// - 구형 생성자 함수/클래스가 이미 있는데, 이후 새롭게 생성자 함수와 클래스를 만들어버리면 호환성이 떨어지게 된다.
// - 이떄 구형의 생성자함수와 클래스를 상속 받으면서 새롭게 생성자 함수와 클래스를 만들어 낼 수 있다.
// - 생성자 함수는 상속이 손이 많이 가지만 클래스는 간단하게 상속 받을 수 있다.
// - JS에서는 클래스가 수박 겉핥기 수준의 기능만 함
// - TS에서는 좀 다름. 클래스를 접근제어자로 쓸 수 있음.
