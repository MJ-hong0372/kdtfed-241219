// 산술연산자

const x = 10;
const y = 4;

let result;

result = x / y;
console.log(result); // 소수점까지 구함

result = x % y;
console.log(result); // 정수로 값을 구한 다음 나머지를 찾아옴

// 증감연산자

let a = 10;
console.log(a);

a = ++a; // 증감 연산자 사용 ++ 한번당 1이 더해짐
console.log(a); // 11이 출력됨

a = --a; // 위 값에서 -1을 해라
console.log(a); // 11-1이니까 10이 출력 됨

//  let x = 10;
//  let y = 4;
//  let result01; // 값 부여 없이 선언
let q = 10,
  r = 4,
  resultt; // 한번에 선언

resultt = q + r--;
console.log(resultt);

// 피연산자 앞에 --가 붙었는지 뒤에 붙었는지에 따라 다름 // 하단은 y 뒤에 --가 붙었기에 x와 y의 연산을 먼저 처리한 다음 --를 처리하게 됨.

// 프로그래밍 언어에서는 데이터 쓰레기통이 있다 => Garbage Collector = GC 가 있다.
// 너무 오랫동안 사용 안되거나 삭제되게 되면 GC로 자동으로 이동된다.

//
// 연결연산자
const actor = "현빈";
const movie = "하얼빈";

const resulttt = actor + "님은 " + movie + "에 출연 하였습니다!";
const resultttt = `${actor}님은 ${movie}에 출연 하였습니다!`; // Template literal : `${변수} +문자`
console.log(resulttt);
console.log(resultttt);

//
// 복합대입연산자

let v = 3,
  j = 3;

// j = v + 3;
// console.log(j); // 6이 나옴

// j += 3; // 3에 v값을 더해서 재할당을 해라
// console.log(j); // 두 값은 같다.

// j *= v;
// console.log(j); // 9 가 된다

j %= v;
console.log(j); // 0이 된다

let str = "<table border='1'>"; // '와 "를 잘 구별해야 한다. " "안에 ""를 넣으면 오류 날 수 있음. "" 안에는 ''을 넣는다.
str += "<tr>";
str += "<td>1</td><td>2</td><td>3</td>";
str += "</tr>";

str += "</table>";

document.write(str);

//
// 비교연산자

console.log(3 == "3"); // 같은 값이 아닌데 같다고 출력해버림
console.log(3 === "3"); // 다른 값이라는 것을 제대로 출력해줌.

console.log(3 != "3"); // != 는 다른 것이냐고 물어보는데 틀렸다고 출력했음 = 두 값을 같은 값으로 인식함을 알 수 있음
console.log(3 !== "3"); // 다른 값이라는 것을 제대로 출력해줌.

//
// 논리 연산자

let s = 10,
  p = 20;
console.log(s > 10 || p > 20); // ||는 or 라는 뜻 좌항과 우황은 둘 다 false
console.log(s <= 10 || p > 20); // ||는  좌항이 참이고 우항은 거짓인데 둘 중 하나라도 참이면 true 라고 나옴
console.log(s <= 10 && p > 20); // ||와 다르게 &&는 두가지 모두가 참이여야만 true가 나옴.

//
// 삼항 조건연산자

let c = 10,
  k = 3;

// let rst = c > k ? console.log("Javascript") : console.log("Typescript"); // c가 k보다 큰게 참이여서 2항이 실행
let rst = c < k ? "Javascript" : "Typescript"; // c가 k보다 큰게 거짓이여서 3항이 실행
console.log(rst);
