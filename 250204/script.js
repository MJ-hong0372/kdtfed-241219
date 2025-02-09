//  window.onload = alert("안녕하세요"); window는 생략 가능 // onload => 우리가 작성한 문서의 header부분을 모두 읽었다는 것. 문서를 모두 로딩하면 알림창이 뜨게 해주세요. => 경우에 따라 이 명령어를 쓰면 defer를 html을 안 써도 됨 = 문서를 읽으면 실행해주세요.라는 명령어기 때문. / defer는 html과 스크립트트를 비동기적으로 읽지 못해서 쓰는 속성이기에 이렇게 쓰는 경우도 있음. // window.onload = () => {};

// const button = document.querySelector("button");
// button.onclick = function() {
//   document.body.style.backgroundColor = "green";
// };

//function() 무기명 함수. 기명함수가 함수를 선언한다는 것


// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "yellow";
// });

document.body.addEventListener("keydown", (event) => {
  document.querySelector("#result").innerText = `code : ${event.code}. key : ${event.key}`;
}); // 나중에 유효성 검사 시 필요함 - 회원 가입 때 특정 단어들을 못 쓰게 막을 수 있음. 유효하지 않은 정보를 넣을 시 회원 가입을 차단 할 수도 있음.