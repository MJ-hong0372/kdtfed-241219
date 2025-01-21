/*
우리가 현재 공부하고 있는 자비스크립트는 객체지향 언어라고 부른다 => C || Java => 객체 지향 언어 => 어떠한 함수가 실행되고, 처리해야 할 자료가 발생되면 기본적으로 객체라는 자료구조의 형태로 변환해서 관리, 저장, 보관한다.

이러한 객체지향 언어들은 거의 대부분 this 객체를 가지고 있음 => 어떤 함수 혹은 속성 값이 실행 되었을 떄, 실행된 함수 및 속성의 주인이 누구인지를 호율적으로 가리켜서 쉽게 찾아 올 수 있게 하는 역할!!

1. JS를 활용해서 함수 선언 => 호출하는 순간 => "실행 컨텍스트 = 객체체" 실행
2. "실행 컨텍스트" => 자바스크립트가 사용하는 Call Stack 공간에서 가장 먼저 실행됨
3. 그 다음 호출 된 함수가 그 위로 쌓이게 되는 구조
4. "실행 컨텍스트 = 객체체" => 어떠한 정보로 구성되어 있는가?
5. 
* VafiableEnviroment (*환경변수) - 조금 더 유동적으로 실시간으로 정보를 가져옴
- environmentRecord (*snapshot 고정값 형식으로 초기값 그대로 가지고 있음) : 해당 함수가 가지고 있는 내부 함수 || 변수 등등의 정보
- outernviromentReference (*snapshot) : 해당 함수가 참조하고 있는 매개변수 || 인자값이 외부에서 들어온 경우, 어느 경로에서 유입되었는지에 대한 전반적인 정보. 전역적인 공간에서 찾아올지, 내부에서 찾을지를 결정함.
* LexicalEnviroment (*사전 환경 정보)
- environmentRecord : 해당 함수가 가지고 있는 내부 함수 || 변수 등등의 정보
- outernviromentReference : 해당 함수가 참조하고 있는 매개변수 || 인자값이 외부에서 들어온 경우, 어느 경로에서 유입되었는지에 대한 전반적인 정보. 전역적인 공간에서 찾아올지, 내부에서 찾을지를 결정함.
* ThisBinding (*this로 가리켜야 할 대상이 누구인지의 정보를 가지고 있음)

*/

/*
Scope(*스코프) = 범위
- 함수가 어디에서부터 어디까지를 커버해야 하는지를 결정(유효범위)
- 이 함수가 처리할 범위
- 전역, 지역, 특정 함수에서 쓰일지를 결정

Scope Chain (*스코프체인)
- 스코프 범위 내 요소를 하나씩 차례대로 검색해 나가는 프로세스
- 위에서 선언 되어서 현재 호출된 함수의ㅡ 과거 선언 당시의 LexicalEnviroment (*사전 환경 정보)까지 참조한다. 그래서 지금 샤용할 변수와, 사용하지 않을 변수를 구별함.

*/

/* 그래서 This란 무엇인가? 어떻게 식별해야 하는가? */

/*
1. JS내 전역공간 내 this는 무조건 전역(*모든 것을 커버할 수 있다.) 객체를 말한다. 
> JS > 어디에서 사용하려고 만들어진 언어인가? => 웹 브라우저에서 사용하려는 것 => 웹 브라우저에서 this를 선언하면 웹브라우저, 즉 window를 가져온다. => 대원칙
> Node.js는 웹 브라우저 밖에서도 JS를 사용할 수 있게 함 > global을 의미함. 

주소창에 about:blank 을 쓰면 아무것도 없는 페이지로 넘어간다.
> 개발자 창에서 this를 검색하면 winndow가 나온다.

> 전역에서 사용 가능한 변수 생성 => 전역 객체 안의 하나의 속성 값이 된다는 뜻 => 변수는 객체 안의 속성이다. 전역변수라는 것은 window / global 의 자식 객체로 만드는 것.

> this 로 내가 가르키고 싶은 객체를 바로 가져 올 수 있음. 아주 쉽게.



*/

// const func = function (x) {
//   console.log(this, x);
// };

// func(1);

// const obj = {
//   method: func,
// };

// obj.method(2);

// method는 속성이 아니라 함수다.

// 함수를 독립적으로 실행 시킬 때에는 This는 전역객체인 window를 가르킨다.

// 반면에 함수가 특정 객체의 속성 method로 실행 될 때에는 해당 객체를 가르킨다.

// 겍체가 뭘 가리키는지 모르겠으면
// 1. this를 호출하는 상황이 전역 요소인지를 본다 => window

// 2. 함수를 독립적으로 호출한 상황에서 this를 요청한 상황 => window

// 3. 특정 객체 안에 있는 속성 중 method를 활용해서 this를 요청 => 해당 객체를 뜻함.

// const obj = {
//   method: function (x) {
//     console.log(this, x);
//   },
// };

// obj.method(1);
// obj["method"](2);

// const obj = {
//   methodA: function () {
//     console.log(this);
//   },
//   inner: {
//     methodB: function () {
//       console.log(this);
//     },
//   },
// };

// obj.methodA();
// obj["methodA"]();

// obj.inner.methodB();
// obj.inner["methodB"]();
// obj["inner"].methodB();
// obj["inner"]["methodB"]();

// 매서드 = method = 객체 안에 있는 함수

// const obj1 = {
//   outer: function () {
//     console.log(this); // outer라는 속성이 콘솔창에 출력되나, 결론적으로 출력되는 것은 사실상 obj1 그 자체이다.
//     const innerFunc = function () {
//       console.log(this);
//     };
//     innerFunc(); // 콜백 함수는 독립적인 함수다. 함수를 독립적으로 부를땐 이 this는 window다.
//     const obj2 = {
//       innerMethod: innerFunc,
//     };
//     obj2.innerMethod(); // 객체 안에서 method는 객체 자체를 불러온다.
//   },
// };

// obj1.outer();

// outer라는 속성이 콘솔창에 출력되나, 결론적으로 출력되는 것은 사실상 obj1 그 자체이다.

// const obj = {
//   outer: function () {
//     console.log(this);
//     const innerFunc = () => {
//       console.log(this);
//     }; // 화살표 함수(=>)는 전역을 찾아오는 것이 아니다.
//     innerFunc(); // obj를 찾아옴.
//   },
// };

// obj.outer(); // obj를 찾아옴.

// ES6 => 2015 년
// 화살표 함수가 이때 나왔는데 => 기존 함수들의 실행컨컨텍스트와 한가지 엄청나게 큰 변화가 생김
/* 실행 컨텍스트의 객체를 생성할 떄는 
1) variableEnvironment
2)lexicalEnvironment
두개는 다른 함수들처럼 똑같이이 생성이 됨

BUT
3) thisBinding는 생성하지 않기로 하고 바로 상위 부모 요소가 가리키는 this를 가져오게 됨 

대다수 화살표 함수를 쓸 때 화살표 함수의의 this는 콜백 함수에서 불러오기에 보통 window라고 잘 못 알고 있음 

*/

// const arr = [1, 2, 3, 4];

// arr.forEach(function (num) {
//   console.log(this, num);
// });
// forEach는 콜백함수임. arr는 전역에서 선언함. 전언에서 this를 불렀기에 window를 가져오게 됨.

// setTimeout(function () {
//   console.log(this);
// }, 300); // 내부에 쓴 함수인 function () {} 콜백함수임. 콜뱃함수는 setTimeout의 영향을 받는데, setTimeout은 전역에서 선언 되었기에 window를 불러옴.

// node : Common JS
// ESM

document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector("#a").addEventListener("click", function () {
  console.log(this);
}); // 돔을 써야 하니까 html 파일에서 defer를 써준다
// addEventListener를 이용해서 function 함수를 불러오게 됨. 여기서의 this는 '<button id="a">클릭</button>'이다.

const obj1 = {
  outer: function () {
    console.log(this); // obj1을 불러옴
    const innerFunc1 = function () {
      console.log(this);
    }; // 독립함수
    innerFunc1(); // 부모와 상관 없이 이 호출은 this는 window

    const self = this; // 이 요소 안에서의 this는 무조건 이 요소 자체를 가르키게 설정하는 법
    const innerFunc2 = function () {
      console.log(self); // this를 우회해서 가져옴
    };
    innerFunc2(); // 이 호출은 obj1
  },
};

obj1.outer();
