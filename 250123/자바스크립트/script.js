// 함수는 선언과 호출이 항상 있어야 한다.
// 선언 만으로 함수에 기능을 구현 할 수 없다 // 호출을 해야 기능을 구현 할 수 있다.

// function code() {}

// code라는 함수를 선언함

// function code() {console.log("오늘은 목요일입니다");}
// 이건 선언을 한 것이다. 호출을 해야 실행 됨.

// function code() {  console.log("오늘은 목요일입니다");}
// code();  <--- 이렇게 호출을 해야 실행이 됨.

// function code() {
//   console.log("오늘은 목요일입니다");
// }
// code(); // 함수

// const obj = {
//   title: "자바스크립트",
//   fnc: function () {
//     console.log("자바스크립트 짱!");
//   },
// };

// obj.fnc(); // fun을 메서드라고 부르는데, 객체 특정 키 안에 할당된 함수를 메서드(= 방법, 방법론)라고 부르기로 함

//
// *문제 : 1부터 10까지 더하기
// const = num
// const i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 내가 푼 문제
// function calcSum(num) {
//   if( let i = 1; i >= 10; i++) {
//     console.log(num);
//   }

// }
// calcSum();

// * 선생님 답
// function calcSum() {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}입니다.`);
// }

// calcSum();

//
// * 매개변수 : 무엇인가 영향을 주는 매개변수
// * function sum() 에서 sum()의 ()안에 매개 변수를 선언한다.
// * 매개변수는 선언부에서 필요하다.
//
// function sum(a, b) {
//   const result = a + b;
//   console.log(`${a}와 ${b}를 더한 값은 ${result}입니다.`);
// }
// sum(Number(prompt("a를 입력하세요")), Number(prompt("b를 입력하세요")));
// sum(); 안에 인자값, 인수를 넣어줘야 한다. 이 인수를 받아야지만 최초에 선언시 약속했던 매개변수 안에 값이 들어간다.

// function calcSum(num) {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}입니다.`);
// }

// calcSum(10);

// *  let sum = 0; 함수를 내부에서밖에 못 쓰니 외부에서 쓸 수 있게 반환해야 한다.
// 반환 => return 문

// function calcSum(num) {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(`1부터 10까지 더하면 ${calcSum(10)}입니다.`); // calcSum(10)은 함수다. sum이라는 변수를 calcSum(10)에 반환했기에 사실 변수가 들어온 것이다.

//
// 사용자에게 값을 받아서 사용하고 싶을 때 = 재활용서을 가지게 됨

// const num = parseInt(prompt("더하고 싶은 숫자를 입력하세요"));
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(`1부터 ${num}까지 더하면 ${calcSum(num)}입니다.`); // calcSum(10)은 함수다. sum이라는 변수를 calcSum(10)에 반환했기에 사실 변수가 들어온 것이다.

// function multiple(a, b, c = 0) {
//   return a + b + c;
// }
// console.log(multiple(2, 4)); // 원래 C 인자값이 없기 때문에 에러가 발생한다. 에러 발생을 막기 위해 위에 있는 c = 0 기본 인자값을 끌어오게 되어있음. 그래도 최우선은 하단의 인자값임. 에러를 막기위한 수단임. 각각의 기본 매개 변수 값을 주는 것이 좋음.

//

//const num = parseInt(prompt("더하고 싶은 숫자를 입력하세요"));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
// }

// calcSum(10);

// * 콘솔창 Sources 창에서 원하는 js 코드 호출부를 클릭 후 새로고침
// => 3번째 버튼인 "∨"다음 버튼을 누르면 스크립트를 컴퓨터가 어떻게 읽어나가는지 바로 볼 수 있다.

// 오류 시 디버깅할 때 편함 scopt

// => 실행컨택스트가 종료되고 끝남.

// -----------------------------------------------------------------------------

// * 자바스크립트 작성 시 오류가 발생 시 *

// 1. Console 에러창을 본다
// 2. 에러가 안 뜨면 Sources에서 호출부를 누르고 브레이크 호출부를 설정 후 scopt가 어떻게 실행되는지, 어디서 멈추는지 본다.
// 3. 브레이크 호출부 해제 하고 새로고침 후 창을 나간다.

// Scope = 범위 (무슨일을 하고 있는가)
// 전역 스코프 = global scope
// var 가 사실상 유일한 전역 스코프임

/* 전역 스코프 사용 사례 1번

var hi = "hello";

function greeting() {
  console.log(hi);
}
greeting(); */

// 전역 스코프 사용 사례 2번

// var hi = "hello";
// function greeting() {
//   hi = "bye";
//   console.log(hi);
// }
// greeting();

// var는 재할당과 재선언이 가능하다 = 사실상 var는 아무것도 쓰지 않고 그냥 변수를 만들겠다. 라는 의미이기도 한다. var를 쓰지 않아도 hi = "bye";라고 변수를 선언 한 것이다.
// 변수를 쓸 때 앞에 아무것도 안 쓰면 전역 변수로 쓴 것이다.

// 전역 스코프 사용 사례 3번
// function greeting() {
//   hi = "hello";
// }
// greeting();
// console.log(hi);
// var 사용하거나 혹은 어떤 키워드도 존재하지 않는 경우 전역에서 사용 가능한 변수가 된다 => 함수 내부에서도 사용 가능하다.
// 전역 스코프는 통제하기 힘들어서 위험하다

/* 블록 스코프 

const factor = 5;

function calc() {
  return num * factor;
}

{
  const num = 10;
  let result = calc();
  console.log(`result : ${result}`);
}

// 하단에 { } 중괄호로 블락 스코프로 만들게 되면 별도의 자료 공간이라고 설정하는 순간 상단에서는 하단 공간의 정보를 가지고 올 수 없다.

*/

/*
function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
const num = 5;

console.log(`1부터 ${num}까지 더하면 ${calcSum(num)}입니다.`);
// let const는 전역 변수가 아니다. 스크립트 변수다. 이 경우 let은 함수 안에서만 쓸 수 있는 지역 변수다.
// 이후 {} 공간 안에서 쓰는 for함수는 블록 변수다
*/

function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
var num = 5;
console.log(`1부터 ${num}까지 더하면 ${calcSum(num)}입니다.`);
// var로 전역 변수를 넣었더니 window의 자식 변수로 가버림.
