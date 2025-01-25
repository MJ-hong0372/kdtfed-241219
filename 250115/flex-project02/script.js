// 목표 : 사용자가 스크롤을 내렸을 때, header 배경색 // banner height를 변경하려고 가상의 클래스를 부여함.

// 1. 사용자가 지금 스크롤을 내렸다. 는 것을 알려줘야 함.
// > 스크롤은 브라우저가 가지고 있음
// > 브라우저에게 스크롤이 내려갔는지 스크립트가 질문해야함.

// 2. header는 html 안에서 header라는 태그를 사용하고 있음을 알려줘야 함

// 3. 사용자가 스크롤을 내렸으니 빨리 active라는 클래스를 header에게 적용 시켜.라는 것을 알려줘야 함.

// 브라우저가 가지고 있는 내장객체

/* scroll event */
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }
});

/* slick-slider */
$(document).ready(function () {
  $(".myslider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinity: true,
    dots: true,
    speed: 300,
  });
});
