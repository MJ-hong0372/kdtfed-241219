// for (let i = 1; i <= 10; i++) {
//   if (i === 6) break;
//   document.write(i, "</br>");
// }
// i가 6이 되는 순간 반복문 안의 break;를 받고 5까지만 나오게 된다.
// 초기값이 조건문을 보고 반복문으로 가고 증감문으로 가는데, 반복문까지만 가고 break를 보고 증감문으로 가지 않고 종결됨.

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) continue;
//   document.write(i, "<br/>");
// }
// // 홀수 값만 출력해라.

// //continue 부분은 실행하지 않겠다.

// // break = 종결

// 중첩 for문
// for (let i = 1; i <= 3; i++) {
//   for (let k = 1; k <= 2; k++) {
//     document.write(`${i}행 ${k}열`, "<br/>");
//   }
//   document.write("<br/>");
// }

// 일반 for문 (생각보다 많이 안 씀)

// forEach 문을 더 많이 씀
// 반복될 아이템 갯수만큼 자동 증감해줌

const marvels = ["ironman", "hulk", "captin", "stranger"];

// for (let = i = 0; i < marvels.length; i++) {
//   console.log(marvels[i]);
// } // 기본 for 문으로 쓸 때

// 함수 안의 함수 = 콜백 함수 = call back 함수 = 함수는 선언부와 호출부가 있다. = 선언되는 부분은 호출되어야 한다. = 호출 제어권을 겉의 함수에게 넘긴 것. forEach가 call 해야 function 은 back(호출) 될 것임. function () 의 ()은 인자값이라고 부르는데, ()안에 marvels.forEach가 넘겨줄 값을 전달해준다. 그 이후 {}안의 내용을 실행하게 됨.
marvels.forEach(function (marvel, index, array) {
  console.log(marvel, index, array);
});

//
//
