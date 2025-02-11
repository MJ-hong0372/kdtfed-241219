const btns = document.querySelector(".controls");
const preBtn = btns.querySelector(".prev");
const nextBtn = btns.querySelector(".next");

const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");

const slideCount = slide.length;
const slideWidth = 200;
const slideMargin = 30;

let currentIdx = 0;

const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length; // 총 갯수 15개 찾아오기
  const newWidth = `${
    (slideWidth + slideMargin) * newSlideCount - slideMargin
  }px`;// 15개가 된 상태의 총 너비값
  slides.style.width = newWidth; // 새롭게 총 너비 값을 CSS로 정의.
}; // 슬라이드가 복제슬라이드01이 아닌 원본슬라이드01 부터 시작하게 설정하기
// (".slides li")로 다시 불러오는 이유는, 15개 복제된 이후의 li 찾아오라는 뜻. 

const setInitialPos = () => {
  const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
};

const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  } // 원본 뒤에 슬라이드 5개

  for (let i = slideCount - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  } // 원본 앞에 슬라이드 5개

  updateWidth();
  setInitialPos();
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
}; //DOM 객체 복제. 선언과 동시에 실행

makeClone();

const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`; // left를 주려고 CSS 에서 position: absolute;을 준거임. left 값을 px로 -값으로 이동하는거. 
  currentIdx = num;// num을 currentIdx 값으로 넘겨줘야 계속 옆으로 이동 함

  if(currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
    }, 500);  // 리마인드 증상을 없앰.
    currentIdx = 0;
  }// next 버튼을 5번 누르면 ||(또는) pre 버튼 5번 누르면 리마인드된다. 그런데 부자연스러우니까 트렌지션(.animated) 효과를 클래스 값으로 주거나 빼야한다. 

  setTimeout(() => {
    slides.classList.add("animated");
  }, 600);
  
}; /* 슬라이드 움직임 효과는 CSS에서 transition으로 준다.*/

nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1); // 클릭 이후 일어난 함수 속에서 인자값을 줘야 하기에 클릭과 무관하게 반드시 콜백함수여야 함. 
}); // next 버튼 클릭시 230px 이동 width:200px + margin-right:30px * 0 ~ 4 = slide.length // 5가 되는 순간 0으로 이동 //


preBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
}); // 위와 반대로 움직임 줌. 

let timer = undefined;

const autoSlide() {
  if (timer === undefined) {
    timer = setIniterval(() => {
      moveSlide(currentIdx + 1);
    }, 3000);
  }
};

autoSlide(); //자동으로 슬라이드 돌리기

const stopSlide = () => {
  clearInterval(timer); // clearInterval 무력화
  timer = undefined; // 멈추게하기
}; 

slides.addEventListener("mouseenter", () => {
  stopSlide();
}); // 마우스 올리면 멈춘다.

slides.addEventListener("mouseleave", () => {
  autoSlide(); // 마우스가 떠나면 움직인다
}); 

// 버튼을 위에서 마우스가 가면 에러가 날거임 그걸 막아야 함 

btns.addEventListener("mouseenter", () => {
  stopSlide();
}); // 마우스 올리면 멈춘다.

btns.addEventListener("mouseleave", () => {
  autoSlide(); // 마우스가 떠나면 움직인다
}); 