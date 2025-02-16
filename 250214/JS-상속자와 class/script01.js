// 사용자정의 객체 생성

const newBook = {
  title: "Javascript",
  page: 360,
  price: 32000,
  author: "박세진",
  published: "2025-04-22",
  question: function () {
    console.log(`${this.author}의 따끈한 신간 도서입니다!`);
  },
};

newBook.question();

// 이런 포멧을 여러번 재사용 해야 한다면 이 타입을 저장하고, 인자값만 변형하면 된다. = 객체를 생성해주는 객체 생성자 함수

// 생성자 함수 = 연산을 위한게 아닌 객체를 찍어내기 위한 함수 / 이름을 반드시 대문자로 시작

function Book(title, page, price, author, published) {
  this.title = title;
  this.page = page;
  this.price = price;
  this.author = author;
  this.published = published;
  this.question = function () {
    console.log(`${this.author}의 따끈한 신간 도서입니다!`);
  };
} // 위에 깡통객체를 만들고, 값을 받아올 요소들을 모두 인자값으로 넣는다. this는 생성될 객체 / question은 함수니까 function로 인자값을 불러온다.

// 생성자 함수를 만들고 나서, 해당 생성자 함수를 사용하고자 할 떄에는 반드시 new 라는 예약어를 쓴다.

const book1 = new Book("Javascript2", 360, 32000, "박세진", "2025-04-22"); // Book은 생성자 함수
console.log(book1);
book1.question();

// C언어나 JAVA에서는 생성자 함수를 Class로 쓰고 있음. 그래서 CLASS가 생성됨됨
