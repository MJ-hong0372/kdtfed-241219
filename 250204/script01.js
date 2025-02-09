// document.querySelector("#userID").addEventListener("focus", () => {
//   document.querySelector("#userID") => 콜백 함수 내부 안에서 this로 줄여서 불러올 수 있다. 콜백함수는 this로 윈도우를 불러오기에 익명함수로 바꿔준다.
// });

document.querySelector("#userID").addEventListener("focus", function () {
  this.style.backgroundColor = "pink";
});

document.querySelector("#userID").addEventListener("blur", function () {
  this.style.backgroundColor = "transparent";
});