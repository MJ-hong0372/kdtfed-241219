// 변수 = variable
// 변수 = 변할 수 있는 값 = 수
// 변수 = 바구니 // 값을 담을 수 있는 그릇

// 선언 & 할당
// 변수는 선언 되어야 사용 될 수 있다. // 선언된 변수에 값을 할당해야 한다.

// 변수를 선언하는 3가지 방식 => 기존엔 1가지 방식만 있다가 2015년도에 바뀜

// 선언하는 방식 => var (*예약어. 이걸 변수로 쓰면 절대 안됨. )
// 선언하는 방식 => let \\ const
//실무에서는 var는 쓰지 않는다. => 포폴에서도 쓰지 마라. 개발자 사이에서 쓰지 말자고 약속한 예약어임.

// 모든 변수는 저마다 고유한 이름을 기짐 => 변수명 \\ 식별자 라고 부름

// const num <- num이라는 변수를 선언

// const num = <- 값을 할당하기 위해 = 라는 연산자를 씀

const num = 1;
// num이라는 변수를 선언하고 1이라고 할당 함

// 내가 프로그래밍 한 언어가 제대로 작동하고 있는지 사용자 몰래 확인하는 방법 : 콘솔 => console.log(); ()안에 매게변수를 넣어서 작동하는지 확인할 수 있다. 라이브 서버에서 Ctrl + Shift + J로 console.log(num); 값인 1이 뜨는걸 확인하면 된다.
console.log(num);

// 터미널을 열어서 터미널 안에서 코드 실행 정보값을 간단하게 확인 할 수 있다.
// node script.js

// const = constant = 상수 (*고정값) <-> 변수
// 고정값인 상수 값으로 변수를 만든다는 페러독스가 있음
// 재선언 && 재할당이 불가능하다.

// 변수를 선언하는 순간 => 컴퓨터에서는 작성된 데이터 (*변수값) => 메모리 영역 할애 함 => 메모리가 담길 수 있는 방을 생성 한다는 것. => 이걸 식별자라고 부름 => 두번다시는 같은 이름의 num을 다시 못 만듬. html의 id 값과 비슷함 => 이게 재선언이 안된다는 의미. const는 상수이기에 두번 다시 쓸 수 없게 됨.

// const num = 2;
// num = <- 기존에 선언된 num을 찾아옴 / num = 2;라고 재할당을 하면 오류가 뜸.

// 프로그래밍 언어는 엄격핤수록 안정성이 뛰어나다 => 위험요소가 감소한다.

// let str = "Hello World";
let str = "Hello World";
console.log(str);

let str = "Me too";
console.log(str); 
//재선언이 불가능함을 알 수 있다.

str = "Me too";
console.log(str);
// let은 재할당이 가능하다.

var bool = true;
console.log(bool);

var bool = false;
console.log(bool);

bool = "Restart";
console.log(bool);
// var은 재선언과 재할당이 가능함. var은 동일한 변수값을 선언하면 충돌이 난다. 여러 개발자가 작업시 100% 충돌이 일어남
// var은 절대로 쓰면 안된다.

 * var num01 = 1;
var resu1t = num01 + num02;
var num02 = 2;
console.log(result); 
// 값이 NaN라고 뜸. 이 방식은 에러가 떠야하는데 var는 에러가 뜨지 않고 계산해버렸음. 절대 쓰지 마라.

const num01 = 1;
const resu1t = num01 + num02;
const num02 = 2;
console.log(result);
// 이건 에러가 뜸 