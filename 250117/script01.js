// 변수 안에 담을 수 있는 값 => 자료형

// 1) 원시 타입 = Primitive type
// number = 숫자열
// string = 문자열
// boolean = 논리열 true/false
// > truthy한 값 => 실존하는 값
// > Templete Litenal => 변수와 문자열을 동시에 사용하고자 할 때, 굳이 번거롭게 연산자를 사용하지 않을 수 있도록 만들어 놓은 문법 (* 자료형이 아닌 문법임. )

// undefined = 미정 > 언젠간 값이 들어옴 (null은 값이 영원히 안 들어옴)
// > falsy 한 값이다 => 실체가 없는 값

// null = "유효하지 않다."라는 값을 갖고 있다.
// > 아예 값을 주지 않은 것을 정의하고자 할 때

// symbol = 유일무이한 값

// 2) 참조 타입 = Reference type
// array = 배열
// function = 함수
// object = 객체

// regex = 정규표현식
// Map = 맵 데이터
// Set = 셋 테이터

const num = 7;
const str = "7";
const bool = true;
const bool02 = false;
// 아무것도 없이 할당하면 숫자로 인식하고, ""안에 든 것은 문자로 인식함

// const age = prompt("당신의 나이를 입력하세요");
// console.log(age);
// console.log(typeof age); ==>typeof 자료형을 알려주는 문법
// 출력하면 string라고 뜸. // 자료형을 제대로 설정하지 않으면 숫자가 아닌 문자로 서버가 인지해버린다. 잘 구별해서 쓸 것.

console.log(typeof bool);
console.log(typeof bool02);

const userName = "현빈";
const movieTitle = "하얼빈";

// const reult = userName + " 배우가 출연한 최근 영화는 " + movieTitle + "입니다.";
// console.log(reult);

// 문장이 길고 변수가 30개면 너무 길어짐. => 새 문법이 들어옴. > Templete Litenal >  변수와 문자열을 동시에 사용하고자 할 때, 굳이 번거롭게 연산자를 사용하지 않을 수 있도록 만들어 놓은 문법 (* 자료형이 아닌 문법임. )

const reult = `${userName} 배우가 출연한 최근 영화는  ${movieTitle} 입니다.`;
console.log(reult);
//빽틱 (``) 사이에 변수는 ${변수명}으로 쓰면 +라던지 ""를 쓸 필요가 없다.

// undefined = 미정
let hobby; // 변수를 선언 후 값 할당 안함
console.log(hobby); // 콘솔창에서 undefined 라고 출력 됨.

let weekend = null;
console.log(weekend);

const only01 = Symbol();
const only02 = Symbol();
console.log(only01 === only02); // === 비교 연성자. 콘솔창에서 false라고 뜸. 복수의 사용자를 관리할 때 씀.

let id = Symbol();
const member365 = {
  name: "Jack",
  [id]: "ezen",
};
// console.log(member365); 여러명의 사람이 id 값을 ezen이라고 똑같이 입력해도 다른 사람이라고 인식하게 Symbol값이라고 설정하는 것. 동명이인이나 같은 값을 한개의 동일한 값이라고 인식하지 않게 해주는 것
// 사실 실제로는 서버에서 다 알아서 걸러줌

// 2) 참조 타입 = Reference type
// [] 배열을 쓰겠다는 것. []안에 담을 수 있는것은 숫자, "문자",
const arr = [1, 2, 3];
const strArr = ["Park", "Kim", "Lee"];
const boolArr = [true, false];
// 배열은 순번을 가지기 떄문에 순번을 가지고 올 수 있다는 장접이 있다.
console.log(arr[0]);
// 첫번째 순번 값을 가져와라

console.log(`${arr[2]}은 arr배열의 ${arr.length}번째 값 입니다.`); // ${arr.length}가 아니라 현재 배열의 총 갯수인 3개를 써버리면 재사용성이 불가능한 코드가 된다. 이 코드는 배열 갯수가 늘어나도 계속 쓸 수 있다.

let arr01 = [1, 2, 3]; // let으로 바꿔서 재할당을 하겠다.
arr01[3] = 7; // 4번째 값을 7로 주겠다.
console.log(arr01); // 인덱스 값을 지정해서 추가로 넣어줄 수 있다. 배열 총 갯수가 3개였지만 추가로 4개를 넣어 줄 수 있게 되는 것.

// 자바스크립트의 중급자 실력 갖추는데 있어서 요구 조건 => iterable 객체 & 반복문을 누가 더 자쥬자재로 사용 가능한가?

console.log(typeof arr);
// object = 객체라고 뜸. 객체 안에서 배열이라는 것이 탄생한 것. 배열의 뿌리는 객체다.
// 배열의 첫번째 값은 무조건 0 이다. 순번을 인덱스라고 한다. 배열의 마지막 인덱스 값은 총갯수-1

const obj = {
  firstNumber: 1,
  secondNumber: 2,
  finalNumber: 3,
}; // {} 중괄호는 객체를 위해 사용함. 베열은 1,2,3 만 쓸 수 있다면 // 객체는 1이 뭘 의미하는지 각각 다 정할 수 있다.

console.log(obj);
// 상황에 맞춰 객체와 배열을 구별해서 써야 한다. 그게 실력이다.

const frontendClass = {
  tutor: "David",
  students: 16,
  major: "language",
};
// 객체의 형태는
// (key:value) => 한 쌍의 property = 속성
// html을 사용할 떄 a href => 속성은 => attribute 이여서 두 속성의 뜻은 다르다.

console.log(frontendClass); // 배열은 순번이 있고 불친절하고 객체는 순번은 없지만 친절하다.
console.log(frontendClass.tutor); // . 온점 표기법
console.log(frontendClass["students"]); // [ ] 대괄호 표기법

// 값을 찾아 온다는 것은, 반대로 값을 생성해서 넣을 수도 있다는 의미.
frontendClass.attitude = "the best";

// function = 기능

// 원래 초창기의 JS 함수 구현

// 함수는 선언 후 호출을 해줘야 함. 호출하지 않으면 의미가 없음
function hello() {
  console.log("hello world!");
} // hello 라는 함수를 선언

hello(); // hello 라는 함수를 호출
console.log(typeof hello); // 콘솔에 function라고 타입이 뜸 // 함수의 기원도 객체임.

// 자바스크립트는 객체 지향 언어. 거의 모든 것이 객체에서 파생됨
