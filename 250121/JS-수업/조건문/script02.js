// 사용자에게 12달 중 좋아하는 월의 정보를 입렵 받는다.

// 12월 부터 2월까지 : 스키의 계절, 겨울을 좋아하시네요!

// 3월 ~5월 : 책 읽기 좋은 봄을 좋아하시네요!

// 6월 ~8월 : 여행가기 좋은 여름을 좋아하시네요!

// 9월 ~11월 : 선선한 날씨인 가을을 좋아하시네요!

// let userMonth = prompt("1월부터 12월까지 좋아하는 달을 입력하세요!");

// switch (userMonth) {
//   case "12":
//     alert("스키의 계졀, 겨울을 좋아하시네요!");
//     break;
//   case "1":
//     alert("스키의 계졀, 겨울을 좋아하시네요!");
//     break;
//   case "2":
//     alert("스키의 계졀, 겨울을 좋아하시네요!");
//     break;
//   case "3":
//     alert("책 읽기 좋은 봄을 좋아하시네요!");
//     break;
//   case "4":
//     alert("책 읽기 좋은 봄을 좋아하시네요!");
//     break;
//   case "5":
//     alert("책 읽기 좋은 봄을 좋아하시네요!");
//     break;
//   case "6":
//     alert("여행가기 좋은 여름을 좋아하시네요!");
//     break;
//   case "7":
//     alert("여행가기 좋은 여름을 좋아하시네요!");
//     break;
//   case "8":
//     alert("여행가기 좋은 여름을 좋아하시네요!");
//     break;
//   case "9":
//     alert("선선한 날씨인 가을을 좋아하시네요!");
//     break;
//   case "10":
//     alert("선선한 날씨인 가을을 좋아하시네요!");
//     break;
//   case "11":
//     alert("선선한 날씨인 가을을 좋아하시네요!");
//     break;
//   default:
//     alert("보기 중에 선택하랬잖아.");
// }

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

// let userMonth = prompt("1월부터 12월까지 좋아하는 달을 입력하세요!");

// if (userMonth) {
//   if (Number(userMonth) >= 12 || Number(userMonth) >= 2) {
//     alert("스키의 계졀, 겨울을 좋아하시네요!");
//   } else if (Number(userMonth) >= 3 || Number(userMonth) >= 5) {
//     alert("책 읽기 좋은 봄을 좋아하시네요!");
//   } else if (Number(userMonth) >= 6 || Number(userMonth) >= 8) {
//     alert("여행가기 좋은 여름을 좋아하시네요!");
//   } else if (Number(userMonth) >= 9 || Number(userMonth) >= 11) {
//     alert("선선한 날씨인 가을을 좋아하시네요!");
//   }
//   if (Number(0)) {
//     alert("보기 중에 선택하랬잖아.");
//   }
// }

let favoritMonth = prompt("좋아하는 월을 입력하세요!");

if (favoritMonth !== "" || favoritMonth !== null) {
  favoritMonth = parseInt(favoritMonth);
  if (3 <= favoritMonth && favoritMonth <= 5) {
    alert("책 읽기 좋은 봄을 좋아하시네요!");
  } else if (6 <= favoritMonth && favoritMonth <= 8) {
    alert("여행가기 좋은 여름을 좋아하시네요!");
  } else if (9 <= favoritMonth && favoritMonth <= 11) {
    alert("선선한 날씨인 가을을 좋아하시네요!");
  } else if (isNaN(favoritMonth) || 0 === favoritMonth) {
    alert("정상적인 월을 입력하세요!");
  } else {
    alert("스키의 계졀, 겨울을 좋아하시네요!");
  }

  window.location.reload();
}

// 그 밖에 모든 달을 묶어서 else문을 쓰면 됨.
