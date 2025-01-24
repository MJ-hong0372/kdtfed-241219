/*
자바스크립트의 이벤트 객체는 둘 중 하나를 채택하게 되어있다.

이벤트 버블링 
이벤트 드릴링 

*/
/*

// mouseover 는 버블링을 기본 속성으로 가지고 있다. 부모요소에 계속 값을 보내주고 있음.

let o = 0;
const overoutOut = document.querySelector("div.out.overout");
overoutOut.addEventListener("mouseover", function () {
  const pItem = this.querySelectorAll("p");
  pItem[0].innerText = "mouseover";
  pItem[3].innerText = ++o;
});

const overoutIn = document.querySelector("div.in.overout");
overoutIn.addEventListener("mouseover", function () {
  const pItem = this.querySelectorAll("p");
  pItem[0].innerText = "mouseover";
  pItem[1].innerText = ++o;
});
*/

// // mouseenter 는 버블링을 기본 속성으로 가지고 있다. 부모요소에 계속 값을 보내주고 있음.

let e = 0;
const enterleaveOut = document.querySelector("div.out.enterleave");
enterleaveOut.addEventListener("mouseenter", function () {
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseenter";
  pItems[3].innerText = ++e;
});

const enterleaveIn = document.querySelector("div.in.enterleave");
enterleaveIn.addEventListener("mouseenter", function () {
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseenter";
  pItems[1].innerText = ++e;
});
