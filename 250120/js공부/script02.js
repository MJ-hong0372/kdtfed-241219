let currentYear, birthYear, age;

currentYear = 2025;
birthYear = window.prompt("당신이 태어난 해는?", 2000);
age = currentYear - birthYear + 1;

console.log(typeof birthYear);
console.log(age);

// console.log(typeof birthYear); 에서 문자로 인식되었는데,
// 하단에 age = currentYear - birthYear + 1; 에서 -라는 연산자 때문에 문자로 인식이 됨
// + 였다면 숫자인 것을 인식 못 했을 것이다.
