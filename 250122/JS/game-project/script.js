const board = document.querySelector(".board");
const h1 = document.createElement("h1");
let itemImg = document.createElement("img");
const resureImg = document.createElement("img");
h1.innerText = "컴퓨터와 가위, 바위, 보 맞추기 게임!";

let userChoice = prompt("가위, 바위, 바위 보 중 하나를 선택하세요!", "가위");
let gameNum;

switch (userChoice) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("잘못 선택 하셨습니다!");
    location.reload();
}

let comChoice = Math.ceil(Math.random() * 3);

itemImg.src = `./images/math_img_${comChoice}.jpg`;

if (gameNum === comChoice) {
  resureImg.src = `./images/game_1.jpg`;
} else {
  resureImg.src = `./images/game_2.jpg`;
}

board.append(h1, itemImg, resureImg);
