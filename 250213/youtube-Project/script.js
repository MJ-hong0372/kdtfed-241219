/* 터치로 좌 우 스크롤 할 때 알아야 할 것 
1. 최초로 손가락이 닿은 지점
2. 그 손가락으로 드로그해서 이동한 간격(X축)
3. 손가락이 떨어진 지점 = 움직인 거리
4. 3번을 인지한 (기억한 후) 후 다음번 터치 지점
5. 전체 요소 너비에서 더 이상 이동 못 시키게 해야 함. */

//  hashlist stiky event

window.addEventListener("scroll", () => {
  const hashlist = document.querySelector(".hashlist");
  const scrollY = window.scrollY;
  if (scrollY > 268) {
    hashlist.classList.add("active");
  } else {
    hashlist.classList.remove("active");
  }
});

// touch event
// 586 스크롤자체 컨텐츠 너비
// 226 스크롤이 가능하도록 하기위해서 준 여백의 공간
// 812 전체공간 확보

const hashContent = document.querySelector(".hashcontent");
const listClientWidth = hashContent.clientWidth;
const listScrollWidth = hashContent.clientWidth + 200;

let startX = 0; // 시작 위치

let nowX = 0; // 손가락 댄 위치

let endX = 0; // 손가락 뗀 위치

let listX = 0; // 두번째로 터치 시 앞에 이동한 값을 간직한 값

const getClientX = (e) => {
  return e.touches ? e.touches[0].clientX : e.clientX; // 이벤트 객체를 참조변수로 받아왔다면 리턴문을 반드시 쓴다
}; // e.touches[0].clientX 첫번째 손가락이 닿은 값을 찾아오라는 것.

const getTranslateX = () => {
  return parseInt(
    getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]
  ); //브라우저에서 행위 한 요소들에 대한 속성 값을 가짐. 변환에 대한 속성값. 3D관련 값.
  console.log(); // .split문자열을 배열로 만들어줌. 정규표현식에서는 ^\ <- 부정의 의미 +/g 글로벌 : 전역(문자열 전체)
};

const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x}px)`;
}; // 최초 터치 이후 움직이는 함수

const onscrollMove = (e) => {
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX);
};

const onscrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    hashContent.style.transition = `all 0.1s ease`;
    listX = 0;
  } else if (listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listClientWidth);
    hashContent.style.transition = `all 0.1s ease`;
    listX = listClientWidth - listScrollWidth;
  }
  window.removeEventListener("touchstart", onScrollStart);
  window.removeEventListener("mousedown", onScrollStart);

  window.removeEventListener("touchmove", onScrollMove);
  window.removeEventListener("mousemove", onScrollMove);

  window.removeEventListener("touchend", onScrollEnd);
  window.removeEventListener("mouseup", onScrollEnd);
};

const onScrollStart = (e) => {
  startX = getClientX(e); // 이벤트 객체를 참조변수로 받아왔다면 리턴문을 반드시 쓴다

  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mousemove", onScrollMove);

  window.addEventListener("touchend", onScrollEnd);
  window.addEventListener("mouseup", onScrollEnd);
};

hashContent.addEventListener("touchstart", onScrollStart);
hashContent.addEventListener("mousedown", onScrollStart); //click은 마우스를 눌렀다 떼는 두 행위를 뜻함. 마우스를 떼는 하나의 행위만으로 실행되게 해야 함.
