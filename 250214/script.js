// 객체 종류

/* 
1. 내장객체 : new Date(), Nath

2. 브라우저 객체 : window

3. 문서객체 : (브라우저의 자식 객체이기도 하지만 별도로 보기도 해야 함.) document

4. 사용자정의객체 : 직접 개발자가 원하는 형태 & 기능을 담고 있는 객체의 형태로 정의하는 것을 의미

*/

/* 

객체는 특징 및 원리 혹은 패턴을 가지고 있음
객체는 propety( = 속성. 단순한 값 외에 디테일한 정보)로 구성되어 있음

그렇다면 속성은 어던 형태를 띄고 있는가?
반드시 key:value의 형태를 띄고 있는 한 쌍이다!!
- value에 입력 될 수 있는 값의 형태는 숫자, 문자만 가능한가?
- 배열 / 함수도 가능

객체의 특정 key 안에 value 값으로 입력된 자료의 형태가 함수인 경우에는 별도의 용어를 사용함니다!!

method = 메서드 = 방법 => 우리가 그동안 사용했던 qaerySelector() => 함수. 뒤에()가 따라오면 무조건 함수다!

window.document.qaerySelector() => qaerySelector는 도큐먼트의 메서드 함수인 것 / document는 window의 객체(propety)다.

함수도 객체이다.

*/

// 객체를 정의하는 방법

/* let obj1 = new Object(); // 값이 없어서 텅 비어있는 깡통 객체. / new 예약어
console.log(typeof obj1);

// 객체 안에 propety 만드는 두가지 방법 / 온점 표기법 / 대괄호 표기법

obj1.name = "David"; // obj1.키 = "propety"
console.log(obj1);

obj1["gender"] = "male"; // 대괄호 표기법 사용시 []안에 ""로 문자임을 알려줘야 함

obj1.name = "Romeo"; // 객체 안의 key는 변수처럼 움직인다. 변수에 할당 된 값이 재적용 되는 형태다.
console.log(obj1);

delete obj1.name; // delete라는 예약어로 Key를 삭제도 가능하다.
console.log(obj1); */

/* const student = {
  name: "Juliet", //key:value의 형태를 띄고 있는 한 쌍
  score: {
    history: 85,
    science: 94,
    averge: function () {
      return (this.history + this.science) / 2; //함수 밖에서 함수에 구현된 값을 쓰고 싶으면 반환해야만 함 = return
    }, // 객체 안의 함수 = 매서드 함수 / function()에서 ()가 비어서 익명함수지만, 이 함수의 이름은 averge가 된다. 찾아올때 student.score.averge(); 로 찾아와야 함다. 함수는 뒤에 ()를 써야 함 averge()처럼.
    // score가 this임
    // 만약 averge: function () => {} 를 쓰게 되면 그 this는 Window가 된다. 익명함수도 쓸 줄 알아야 한다.
  }, //중첩객체 변수"처럼" 쓸 수도 있다. 일반 변수가 아님. 키 안에 키 값이 존재함. 나중에 값을 찾아오려면 student.score.history; 로 찾아옴. 온점 표기법으로 값.값.값 을 찾아옴.
}; // const student : student라는 변수를 생성. 담길 값에 따라 객체 변수 함수 중 하나로 바뀜. const student = {}; /이제 객체가 됨
console.log(student.score.averge());

// 익명함수와 화살표 함수의 차이점을 알아야 하고, 그때 this가 의미하는게 다르다는 걸 반드시 숙지 할 것! */

/* const book3 = {
  title: "누구나 처음은 있다",
  page: 350,
  buy: function () {
    console.log("이 책을 구입 했습니다!");
  },
}; // {}가 나오는 순간 객체를 만든다는 의미 / this를 반드시 쓰고 싶다면 객체 안의 함수는 익명함수를 쓰자.

book3.buy(); // 자바스크립트는 다중 패러다임 언어여서 바로 출력이 됨됨

book3.price = 20000; // const는 재할당이 안되지만 원시타입과 창조타입은 데이터 저장 방식이 달라서, 이렇게 값을 더 넣어 줄 수 있다. 변수 안의 데이터 값을 직접 불러오는게 아니라 별도의 데이터 방을 만들어서 방 주소를 불러오기에 충돌이 없다.
console.log(book3); */
