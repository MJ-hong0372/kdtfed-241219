/*
Call-Back 지옥 => 콜백 함수를 계속 이어서 작성하는 형식

*/

setTimeout(() => {
  let coffeeName = "에스프레소";
  console.log(coffeeName);
  setTimeout((coffeeName) => {
    coffeeName = "카페라떼";
    console.log(coffeeName);
    setTimeout((coffeeName) => {
      coffeeName = "카페모카";
      console.log(coffeeName);
      setTimeout((coffeeName) => {
        coffeeName = "아메리카노";
        console.log(coffeeName);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
