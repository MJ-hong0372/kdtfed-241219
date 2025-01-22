// 이전 파일은 나와 컴퓨터가 같냐 틀리냐만 비교 한 것
// 컴퓨터와 진짜 게임 진행.
// querySelectorAll로 수집해온 html 요소들을 배열로 인식해서 옴
// 그래서 forEach(객체에만 쓸 수 있음)을 사용 가능 함.

const buttons = document.querySelectorAll("button");
const userChoice = document.querySelector(".you-choice");
const computerChoice = document.querySelector(".computer-choice");
const winner = document.querySelector(".result");

const result = ["가위", "바위", "보"];
let message;

const show = (user, computer, message) => {
  computerChoice.innerText = computer;
  userChoice.innerText = user;
  winner.innerText = message;
};

const game = (user, computer) => {
  if (user === computer) {
    message = "무승부";
  } else {
    switch (user + computer) {
      case "가위보":
      case "바위가위":
      case "보바위":
        message = "사용자 승리!";
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        message = "컴퓨터 승리!";
        break;
    }
  }
  show(user, computer, message);
};

const play = (event) => {
  user = event.target.innerText; // 하단의 콜백 함수를 전역에서 쓸 수 있도록 밖으로 빼줌 => 리팩토링
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});
