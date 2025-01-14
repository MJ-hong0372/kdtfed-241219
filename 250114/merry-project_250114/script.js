//한글로 지금 내가 제어 하고자 하는 내용이 무엇인지 부터 작성해보기!!

//논리적으로!!

// 내가 현재 구현하고자 하는 기능을 대략적이지만 말로 표현하지 못한다면, 100% 코딩은 불가하다!!!

// 자바스크립트를 어려워 하지 말고 내가 지금 우엇을 해야 할지 한글로 써본다.

// 8개의 면들을 가지고 모션 제어

// 01. 8개의 face를 대상으로 모션을 제어할 것

// -> 컴퓨터에게 무엇이 8개의 face인지 부터 알려주기

// --> 8개의 face를 어딘가에 담아서 컴퓨터에게 "이게 8개의 face야!"라고 알려줘야 함

// 그 어딘가에 담고자 하는 그릇 => 변수라고 부름 => 변수를 생성해야 컴퓨터가 이해 함

// 02. 해당 모션 : 각각의 face에 마우스를 올리면 회전이 멈춤

// 03. 해당 모션 : 각각의 face에서 마우스가 떠나가면 회전이 정상적으로 진행

const circle = document.querySelector("#circle"); // 전체 목록 확인
const articles = circle.querySelectorAll("article"); // 특정 대상 선택하기

articles.forEach((article) => {
  article.addEventListener("mouseenter", () => {
    circle.style.animationPlayState = "paused";
  });
});

articles.forEach((article) => {
  article.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "running";
  });
});
