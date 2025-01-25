// const userInput = prompt("😘이름을 입력하세요.");
// console.log(typeof userInput);
// // 사용자가 아무것도 입력하지 않고 창을 끄면 콘솔창에 null이라고 표시 됨. 이건 값이 없다는 값임
// // 아무 입력 없이 창을 끌 시 typeof 로 확인하면 string이라는 걸 확인 될 수 있음. // 취소하면 object

// // 조건문을 실행하기에 앞어서 조건식 자체가 성립될 수 없는 값이 들어온다면, 더 이상의 조건문을 실행시키지 않는 조치!! => 메모리 효율성을 위해

// // 예외 조항 처리를 한다고 함

// if (userInput === "" || userInput === null) {
//   console.log("값이 없습니다.");
// } else {
//   alert(`${userInput}님 좋은 아침이예요. ❤️`);
// }

// 그 뒤에 쓸 코드(else문)를 실행시킬 필요가 없는 것임

// 중첩 if 조건문
// const score = prompt("내 인생 점수!");

// if(score !== "" || score !== null) {
//   if(Number(score) >= 90 ) {
//     alert("나름 잘 살았다. 😊");
//   } else if (Number(score) => 80) {
//     alert("이 정도면 괜찮아! 😊")
//   } else {
//     alert("지금부터 열심히 해보자!")
//   }
// }

// 짝수와 홀수를 구분하는 if 조건문
// 삼항조건 연산자 !!!

// let userNumber = prompt("숫자를 입력하세요!");

// if (userNumber !== "" || userNumber !== null) {
//   userNumber = parseInt(userNumber);
//   if (userNumber % 2 === 0) {
//     alert(`${userNumber}는 짝수입니다!`);
//   } else {
//     alert(`${userNumber}는 홀수입니다!`);
//   }
// }

// 삼항조건 연산자로 변경하기기

// let userNumber = prompt("숫자를 입력하세요!");

// if (userNumber !== "" || userNumber !== null) {
//   userNumber = parseInt(userNumber);
//   userNumber % 2 === 0
//     ? alert(`${userNumber}는 짝수입니다!`)
//     : alert(`${userNumber}는 홀수입니다!`);
// }

// switch 뮨

// const webPage = prompt(
//   "네이버, 구글, 다음 중 즐겨 사용하는 사이트는 어디인가요?"
// );

// switch (webPage) {
//   case "네이버":
//     let url = "https://www.naver.com";
// } // url 함수는 로컬(switch 문)에서만 먹히는 값

// if (url) {
//   window.location.href = url;
// } // url 값은 전역에서 쓸 수 없음 = 오류가 뜸.
// url 값을 전역에서 쓸 수 있게 선언해야 함함

const webPage = prompt(
  "네이버, 구글, 다음 중 즐겨 사용하는 사이트는 어디인가요?"
);
let url;

switch (webPage) {
  case "네이버":
    url = "https://www.naver.com";
    break;
  case "구글":
    url = "https://www.google.com";
    break;
  case "다음":
    url = "https://www.daum.net";
  default:
    alert("보기 중에 존재하지 않는 사이트 입니다.");
}

if (url) {
  window.location.href = url;
}
