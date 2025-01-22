// 오늘 배울 내용
// for of 문

// const marvels = ["Ironman", "Spiderman", "Thor", "Stranger"];

// for (let marvel of marvels) {
//   console.log(marvel);
// }
// //of : ~중에 하나 / 여러개 중에 하나

// // for(let 변수명a of 배열명) : 여러 배열 중  하나인 a를 찾아오겠다.

// const jsBook = {
//   title: "재미있는 자바스크립트",
//   pubDate: "2025-03-01",
//   pages: 270,
//   finished: true,
//   review: function () {
//     console.log("겁나재밌어요");
//   },
// };

// // 객채 객체명 = { 키:벨류 }
// // 객체 안의 키를 반복해서 찾아 올 수 있다.

// for (let key in jsBook) {
//   console.log(`${key} : ${jsBook[key]}`);
// }

// - while 문 : 참과 거짓을 따짐
// let stars = parseInt(prompt("별의 갯수 : "));

// while (stars > 0) {
//   document.write("*");
//   stars--;
// }

//
// do ... while 문 : while 문이 참이든 거짓이든 일단 1회 반복함
// let stars = parseInt(prompt("별의 갯수 : "));
// do {
//   document.write("*");
//   stars--;
// } while (stars > 0);
