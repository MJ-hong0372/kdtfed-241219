const now = new Date(); //오늘 날짜 정보
const firstDay = new Date("2017-06-04"); // 만난 날짜 찾아오기

const toNow = now.getTime(); //밀리초로 바꾸기
const toFirst = firstDay.getTime(); // 최초 시간 밀리초로 바꾸기기
const passedTime = toNow - toFirst; // 경과된 시간
const passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000)); // 날짜 계산 round는 반올림 함수

document.querySelector(".accent > span").innerText = `${passedDay} 일`;

const calcDate = (days) => {
  let future = toFirst + days * (24 * 60 * 60 * 1000); //100일 계산
  let someday = new Date(future);
  let year = someday.getFullYear();
  let month = someday.getMonth() + 1;
  let day = someday.getDate();

document.querySelector("#date" + days).innerText = `${year}년 ${month}월 ${day}일`;
};

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);