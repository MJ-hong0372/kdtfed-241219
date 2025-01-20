// 사용자에게 교통비, 식비, 음료비 이상 3개의 값을 전달 받아서 3개의 총 합이 적정 지출 비용을 초과하는 경우, "00원 초과, 지출을 줄여주세요!", 만약 적정 지출비용을 초과하지 않은 경우, "00원 유지, 축하드립니다."라는 메세지가 콘솔창에 출력되게 해주세요.

// 적정 지출 비용은 10000원.

/* const bus = window.prompt("당신의 차비를 알려주세요.");
const eat = window.prompt("당신의 식비를 알려주세요.");
const drink = window.prompt("당신의 음료비를 알려주세요.");

const allMoney = bus + eat + drink;
const normalMoney = 10000;

let result = normalMoney >= allMoney && normalWeight <= allMoney;

result = result
  ? `${result}원 초과, 지출을 줄여주세요!`
  : `${result}원 유지, 축하드립니다!`;
console.log(result);
1000;

*/

let traffic, food, drink;

traffic = parseInt(prompt("교통비를 입력하세요"));
food = parseInt(prompt("식비를 입력하세요"));
drink = parseInt(prompt("음료비를 입력하세요"));

let total = traffic + food + drink;
let result = total < 10000;
const plus = total - 10000;
const minus = 10000 - total;

result = result
  ? `${minus}원 남았습니다. 돈 관리 잘 했어요.😘`
  : `${plus}초과했습니다! 돈 관리를 잘해주세요.🥲`;
console.log(result);
