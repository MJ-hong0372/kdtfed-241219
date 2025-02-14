// class 상속하기
class BookC {
  constructor(title, price) {
    this.title = title; // 여기서 this는 인스턴스를 뜻함.
    this.price = price;
  }
  buy() {
    console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
  }
}

class TextBookC extends BookC {
  constructor(title, price, major) {
    super(title, price); // 상속받고자 하는 인자값을 넣어준다.
    this.major = major;
  }
  buyTextBook() {
    console.log(
      `${this.major} 전공서적, ${this.title}을(를) ${this.price}원에 구매하였습니다.`
    );
  }
} // class 상속하기. extends : 연장한다 = 상속받았다고 해석 됨

const book1 = new BookC("자료구조", "15000");
const book2 = new TextBookC("인공지능", "5000", "컴퓨터공학");

console.log(book1);
console.log(book2);

book1.buy();
book2.buyTextBook();
