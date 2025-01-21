// Iterable 객체 & 반복문을 지배하는 자가 JS의 중급단계를 지배한다!

// 반복문 : 반복하게 하려고 할 때.
// 자료구조 & 알고리즘 커리큘럼
// 어떤 경우에 배열을 써야 하는가
// 문ㅂㅂ
// 어떤 자료구조가 현 문제를 해결하는데 가장 효율적인가
// 시간복잡도 => 현 자료구조 및 알고리즘이 해당 문제를 해결하는데 걸리는 시간
// 빅오 : 최악의 경우 // 빅세타 : 빅오메가와 빅오의 중간 단계로 50%의 확률 // 빅오메가 : 최단 시간 해결 했을 때.
// 반복문이 시간복잡도의 효율성과 시간 기준으로 쓰임
// 컴퓨터가 가장 잘하는게 반복해서 무엇인가 하는 것 = 반복문을 잘 쓰는 게 자바스크립트를 잘 이해하고 잘 쓴다는 것이다.

// 기본형 반복문
// for문 (~시간 동안에)
// 반드시 자바스크립트 내 Iterable(순회하다 = 배열과 유사) 객체만 사용 가능하다다

// 배열은 자료형이고 자료형은 변수에 담을 수 있다.

// for(초기값; 조건식; 증감문) { 반복문 실행 }
//초기값이 참이면 조건식이 참이면 반복문을 실행한다.
// 반복문 실행 후 초기값을 증감 후 조건식이 참이면 증감문 실행

// 일반 for문
// const studentnts = ["Park", "Kim", "Lee"];

// for (let i = 0; i < studentnts.length; i++) {
//   console.log(studentnts[i]);
// }

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 7 !== 0) {
    document.write("<p class='red'>" + i + "</p>");
  } else if (i % 5 !== 0 && i % 7 === 0) {
    document.write("<p class='green'>" + i + "</p>");
  } else if (i % 5 === 0 && i % 7 === 0) {
    document.write("<p class='aqua'>" + i + "</p>");
  }
}

const reds = document.querySelectorAll(".red");
reds.forEach((red) => {
  red.style.color = "red";
});

const greens = document.querySelectorAll(".green");
greens.forEach((green) => {
  green.style.color = "green";
});

const aquas = document.querySelectorAll(".aqua");
aquas.forEach((green) => {
  aqua.style.color = "aqua";
});
