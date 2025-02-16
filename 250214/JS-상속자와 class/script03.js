// 사용자에게 지름 & 높이 값을 받아서 원기둥의 부피를 구하는 프로그램 코드를 작성하세요

// 원기둥 부피 = 밑면적 * 높이
// 밑면적 =  Math.PI * r * r
// Radius = 반지름

// 단, 어떤 원기둥을 예상하더라도 해당 결과 값이 출력될 수 있도록 생성자 함수로 코드를 구현한다.

// function Cyl(diameter, height) {
//   this.diameter = diameter,
//   this.height = height,
//   this.result = function () {
//     Math.PI * diameter * diameter * height;
//   };
// }

// const diameter = Number(document.querySelector("#cyl-diameter"));
// const height = Number(document.querySelector("#cyl-height"));

// const cyl = new Cyl();
// console.log(typeof diameter);

// 생성자 함수를 잘 사용하려면, 왜 생성자 함수를 사용해야하는가에 대한 질문의 답을 할 수 있어야 함!!

// 생성자 함수는 왜 사용하는가? 반복적인 패턴의 객체를 보다 호율적으로 만들어내기 위한 목적!!

// 객체만들기 => 정적인 속성값 관리& 사용자의 요구사항에 따른 메서드 함수도 자유롭게 만들 수 있다는 것을 의미!

// const button = document.querySelector('input[type="button"]');
// const result = document.querySelector("#result");

// function Cylinder(cylinderdiameter, cylinerHieght) {
//   this.diameter = cylinderdiameter;
//   this.height = cylinerHieght;
//   this.getVolume = function () {
//     const radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// }

// button.addEventListener("click", (e) => {
//   e.preventDefault(); // input 요소 가지고 올 시 이벤트 발생시 기본 값 없애기. input사용시 항상 기본값으로 쓴다고 생각하라.
//   const diameter = document.querySelector("#cyl-diameter").value;
//   const height = document.querySelector("#cyl-height").value;

//   if (diameter === "" || height === "") {
//     result.innerText = "지름과 높이 값을 입력하세요!😁😁😁";
//   } // 예외조항 처리
//   else {
//     const cylider = new Cylinder(parseInt(diameter), parseInt(height));
//     result.innerText = `원기둥의 부피는 ${cylider.getVolume()}입니다.`;
//   }
// });

// Class로 만들기
const button = document.querySelector('input[type="button"]');
const result = document.querySelector("#result");

class Cylinder {
  constructor(cylinderdiameter, cylinerHieght) {
    this.diameter = cylinderdiameter;
    this.height = cylinerHieght;
  }
  getVolume() {
    const radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault(); // input 요소 가지고 올 시 이벤트 발생시 기본 값 없애기. input사용시 항상 기본값으로 쓴다고 생각하라.
  const diameter = document.querySelector("#cyl-diameter").value;
  const height = document.querySelector("#cyl-height").value;

  if (diameter === "" || height === "") {
    result.innerText = "지름과 높이 값을 입력하세요!😁😁😁";
  } // 예외조항 처리
  else {
    const cylider = new Cylinder(parseInt(diameter), parseInt(height));
    result.innerText = `원기둥의 부피는 ${cylider.getVolume()}입니다.`;
  }
});
