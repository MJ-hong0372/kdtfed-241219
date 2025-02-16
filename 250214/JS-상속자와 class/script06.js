// 생성자 함수와 Class의 상속

/*  
콘솔창에서 하단 입력
let arr = new Array(); <-- Array라는 class로 미리 만들어서 new라는 예약어로 호출함. 
arr <- Array라는 class로 만들어진 인스턴트
[] <- 빈 베열이 생성됨. 
[[Prototype]] <- 콘솔창에서 프로토 타입 임을 알 수 있다.

인스턴스는 Array라는 조상을 통해 속성들을 상속을 받은 것

arr.__proto__ <- 인스턴스 객체가 사용 할 수 있는 요소들을 찾아옴.
기울여진 f는 프로포티 속성을 뜻함

*/

// 인스턴스 객체 & 프로토타입 관계

/*
1. class 혹은 생성자 함수를 사용해서 객체의 포멧(*형태)를 구현 할 수 있음

2. class 혹은 생성자 함수를 사용해서 만들어진 포켓을 사용하려면 new 예약어와 함께 Prototype 객체(*혹은 함수)를 호출하면 가능!!!

3. 이렇게 호출해 온 Prototype 객체의 속성 및 메서드를 상속받은 요소를 instance(*인스턴스)라고 함!!!

4. 만약 instance 객체의 원조라고 할 수 있는 Prototype이 무엇인지, 혹은 해당 Prototype이 가지고 있는 속성 및 메서드 함수를 확이냏보고자 할 떄, 사용할 수 있는 속성은 __proto__ (인스턴스 타입의 조상 확인)

5. 인스턴스 객체에 영향을 준 프로토타입의 조상이 누구인지를 확인 해 볼 수 있는 속성 prototype

Book.prototype [[Prototype]] : Object 이며, 내부를 확인해보면 __proto__ : Object라고 뜸. 그 다음엔 __proto__ : null 이라고 뜸.(더이상의 부모요소 없음)

=>> 최초로 Object 생성 => Object 생성( .prototype 속성으로 조상 확인) => 생성자 함수 생성( .__proto__속성으로 인스턴스 조상 확인) => Prototype 생성 => instance 순으로 생성된 것.

=> .prototype 이라는 속성으로 Prototype의 상위 속성값을 편집할 수 있게 됨. 

*/

/* 

const Book = function (title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;

  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
    return str;
  };
}; // 생성자 함수

const book1 = new Book("Typescript", 648, false); // 인스턴스 

처음에는   
this.finish = function () {
let str = "";
this.done === false ? (str = "읽는 중") : (str = "완독");
return str;
}; 
을 안 만들었는데 나중에 필요해지는 경우 !!!!
  
나중에 이 함수를 Book 안에 넣게 되면 호환이 안되게 됨. 그런 경우 
Book을 상속받는 새로운 생성자 함수를 만들어서 추가로 넣으면 됨. 
*/

const Book = function (title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;
}; // 생성자 함수

Book.prototype.finish = function () {
  this.done === false ? (str = "읽는 중") : (str = "완독");
  return str;
}; // Book의 조상을 확인 할 수 있음 확인할 수 있다는 건 수정 및 추가도 된다는 것. 위 내용을 상속 받으면서 finish 함수를 추가로 넣을 수 있게 됨.

const book1 = new Book("Typescript", 648, false);
