// 변수

// 자료혐

// 자동 형태 변환 = 자동 형변환

const one = "20";
const two = 25;

const reselt = one + two; // 문자와 숫자를 더하면 결과값은 자동으로 문자가 됨
const reselt01 = one - two; // 문자와 숫자를 빼면 결과값은 자동으로 숫자가 됨

console.log(reselt);
console.log(typeof reselt); // 문자

console.log(reselt01);
console.log(typeof reselt01); // 숫자

// 수동 형태변환 = 수동 형변환
// 숫자라는 형변환 : Number // parseInt // parseFloat 로도 바꿀 수 있음
const str = Number("20");
console.log(typeof str); // 숫자

const str01 = parseInt("20");
console.log(typeof str01); // 숫자

const str02 = parseFloat("20");
console.log(typeof str02); // 숫자

// Number // parseInt // parseFloat 각각의 차이점
const num99 = "17.8";

console.log(Number(num99)); // 소수점까지 살림
console.log(parseInt(num99)); // Int 정수만 살림
console.log(parseFloat(num99)); // 소수점까지 살림 // 소수점이 중요하면 이걸 최우선으로 써야함

//
// Number // parseInt 차이점
console.log(Number(true)); // 모든 값을 다 숫자로 바꿔버림 무엇을 입력하든 다 숫자로 줌
console.log(parseInt(true)); // Nan = Not a Number  숫자만 넣어라

//
// Number // parseInt 차이점
console.log(Number(true)); // 모든 값을 다 숫자로 바꿔버림 무엇을 입력하든 다 숫자로 줌
console.log(parseFloat(true)); // Nan = Not a Number  숫자만 넣어라

//
// toString() // String()

const num77 = 77;
console.log(typeof num77.toString());

// nll & undefined => 문자열
console.log(typeof String(num77));

// 논리형 boolean으로 형변환!!
console.log(Boolean("Hello")); // 뭐가 와도 true
console.log(Boolean(undefined)); // 0,1,undefined 3가지는 무조건 false

// 다음주 주제 연산자 & 제어문
