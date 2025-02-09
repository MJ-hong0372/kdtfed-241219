// button Event

const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukebox = document.querySelector("#menuJukebox");
const contentFrame = document.querySelector("#contentFrame");

const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = "background: #fff; color:#000; font-weight:900;"
  menuGame.style = "background: #55b2e4; color:#fff;"
  menuJukebox.style = "background: #55b2e4; color:#fff;"
};

const gameChange = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuHome.style = "background: #55b2e4; color:#fff;"
  menuGame.style = "background: #fff; color:#000; font-weight:900;"
  menuJukebox.style = "background: #55b2e4; color:#fff;"
};

const jukeboxChange = () => {
  contentFrame.setAttribute("src", "./jukebox.html");
  menuHome.style = "background: #55b2e4; color:#fff;"
  menuGame.style = "background: #55b2e4; color:#fff;"
  menuJukebox.style = "background: #fff; color:#000; font-weight:900;"
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuJukebox.addEventListener("click", jukeboxChange);

// count Event - 서버와 쿠키가 필요함. 쿠키가 있는 상태로 같은 페이지에 재인입되면 카운트 됨. - 모바일에선 안 될 수도 있음
// 쿠키 : 기본적으로 최초 저장 날짜 정보와 유효기간 데이터가 필요함 
/* 
> 서버 => 클라이언트에게 쿠키를 전달한 이후, 해당 쿠기가 무제한 유지되지 않는다.
*/ 

const getFormattedDate = () => {
  const date = new Date(); // 내장객체 date 함수와 예약어 new 
  const year = date.getFullYear(); //년만 추출하기
  const month = "0" + (date.getMonth() + 1); //월만 추출하기 => 그런데 1월로 추출됨. 현 시점에서 1월을 index의 0으로 인식하고 현시점에 2월이기에 index 1값인 1월로 찾아옴. 그래서 월은 +1 해줘야만 함
  const day = "0" + date.getDate(); //일만 추출하기
  return `${year}-${month}-${day}`;
}; // 쿠키 생성 날짜 함수 
// "0" + : 한자리 수로 날짜를 찾아오면 나중에 날짜가 두자리 수가 되면 계산이 틀어짐. 월과 날짜 앞에 0을 앞에 넣어서 기본적으로 두자리로 만들어줘야 함

const todayDate = getFormattedDate();
const dailyCookiName = `pageHit_${todayDate}`; //쿠키 이름의 기본 값을 설정해준다. 
// today는 매일 00시에 리셋 된다. total은 어제의 누적된 값이 계속 쌓여야 한다.

const expireDate = new Date(); // 유효기간
expireDate.setDate(expireDate.getDate() + 1); // getDate가 불려오는 순간을 유효기간으로 잡겠다.
const expireDateString = expireDate.toGMTString();

const cookieVal = (cookieName) => {
  const thisCookie = document.cookie.split("; "); // "pageHit_2025-02-07=5; expires=2025-02-08"에서 "; "기준으로 앞뒤로 배열형식으로 쪼개라 ; 앞은 인덱스 1 뒤는 인덱스 2
  for (let i = 0; i < thisCookie.length; i++) {
    if(cookieName === thisCookie[i].split("=")[0]) {
      return thisCookie[i].split("=")[1];
    }
  }
  return 0;
};
/* 쿠키 값은 어떻게 생겼을까?

"쿠키네임=쿠키값; expires=만료날짜"
"pageHit_2025-02-07=5; expires=2025-02-08"
여기서 =5 인 5를 찾아와야 함. 몇번째 들어왔는지 알게 되는 실질적 값임.
*/

let dailyHitCt = parseInt(cookieVal(dailyCookiName));
if(isNaN(dailyHitCt)) {
  dailyHitCt = 0;
}
let totalHitCt = parseInt(cookieVal("totalPageHit"));
if (isNaN(totalHitCt)) {
  totalHitCt = 0;
}

toyHitCt++;
document.cookie = `totalPageHit=${totalHitCt}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
document.querySelector(".zero").innerText = dailyHitCt;
document.querySelector(".total").innerText = totalHitCt;