const displayDate = document.querySelector("#today"); // 요일
const displayTime = document.querySelector("#clock"); // 시간

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day1 = today.getDay();
// console.log(day1); 요일. Wep에서는 일월화수 순서 : 일요일이 0이고 수요일이 3

let day2;

switch(day1) {
  case 0:
  day2 = "일요일";
  break;
  case 1:
  day2 = "월요일";
  break;
  case 2:
  day2 = "화요일";
  break;
  case 3:
  day2 = "수요일";
  break;
  case 4:
  day2 = "목요일";
  break;
  case 5:
  day2 = "금요일";
  break;
  case 6:
  day2 = "토요일";
  break;
};
// console.log(day2); 수요일로 나옴.

displayDate.innerText = `${year}년 ${month}월 ${date}일 ${day2}`;

const clock = () => {
  const current = new Date();
  let hrs = current.getHours();
  let mins = current.getMinutes();
  let secs = current.getSeconds();

  let period = "AM";
  if(hrs === 0) {
    hrs = 12;
  } else if(hrs > 12) {
    hrs = hrs -12;
    period = "PM";
  }

  secs = (secs < 10) ? "0" + secs : secs
  mins = (mins < 10) ? "0" + mins : mins
  hrs = (hrs < 10) ? "0" + hrs : hrs

  displayTime.innerText = `${period} ${hrs}시 ${mins}분 ${secs}초`;
};

setInterval(clock, 1000);