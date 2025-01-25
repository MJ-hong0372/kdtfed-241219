/* 함수 선언식

function sum(a, b) {
  return a + b;
}
sum(10, 20);
console.log(sum(10, 20));
*/

/* 익명 함수 표현식 = 함수의 이름이 함수값이다. 
const num = function (a, b) {
  return a + b;
};

console.log(num(10, 20));
*/

//
/* ES6 문법 이후 화살표 함수 표현식이 나움 =  function  생략  

const num01 = (a, b) => {
  return a + b;
};
console.log(num01(10, 20));
*/

//
/* 선언과 호출 없이 => 선언 즉시 실행

(function (a, b) {
  let result = a + b;
  console.log(`함수 실행결과값 ${result}`);
})(100, 200);
*/

/*
const hi = () => {
  return "안녕하세요";
}; // 값을 반환하는 표현식 문이 됨

const hi = () => "안녕하세요";
// 값을 반환하는 표현식 문이 됨 위와 같은 함수가 됨.
*/

// call(*호출)의 제어를 자유롭게 할 수 있는 함수와 제어를 받는 함수(*콜백 함수)

/* const btn = document.querySelector("button");

btn.addEventListener("click", function display() {
  alert("클릭했습니다!");
});

// addEventListene는 함수다. display도 함수다. 함수 안에 함수를 또 넣었다.
// display는 addEventListene의 종속관계로 콜백 함수다. 
*/

// const btn = document.querySelector("button");

// btn.addEventListener("click", () {
//   console.log("클릭!");
//   return () => {
//     console.log("클릭!클릭!");
//     return () => {
//       console.log("클릭!클릭!클릭");
//       return () => {
//         console.log("이제그만");
//       }
//     }
//   }
// });

//
/*
const showData = (name, age) => {
  alert(`안녕하세요! ${name}님 ${age}살 이시군요!`);
};

const getData = (callback) => {
  const userName = prompt("이름을 입력하세요!");
  const userAge = prompt("나이를 입력하세요!");
  callback(userName, userAge);
};

getData(showData);
매개개변수로 콜백 함수를 넣을 수 있다.*/

//
//
//

/* 자바스크립트 언어 => 함수
자바스크립트의 함수를 1급 시민이라고 부름

1. 변수에 함수를 담을 수 있음 : 원래는 전통적으로 함수 선언식으로만 함수를 호출 했었는데, 익명 함수가 등장하면서 함수를 보다 편리하게 작성 할 수 있게 되었다.

2. 다른 함수의 매개변수로 등장 할 수 있다. : 콜백 함수라는 스타일 형식을 창좋낼 수 있게 됨

3. 다른 함수의 반환값(*return)으로 함수가 등장할 수도 있다.


*/
