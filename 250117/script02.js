let a = 10;
let b = a;
// console.log(a, b);

// 값이 10, 10으로 나옴

let obj1 = {
  c: 10,
  d: "ddd",
};
let obj2 = obj1;
// console.log(obj1, obj2);
// 값이 10 ddd로 나옴

b = 15;
obj2.c = 20;
// console.log(a, b);
// 값이 10, 15로 나옴

// console.log(obj1, obj2);
// 값이 20 ddd로 나옴
// obj2.c를 바꿨는데 결과는 obj1.c가 바뀌어져 있는걸 볼 수 있음

// 변수의 값을 담을 수 있는 그릇 <-- 단순히 이렇게만 설명하면 안되지만 일단 설명하기 편하게 설명한 것

// CS : 컴퓨터 사이언스(공학) //
// 컴퓨터 -> 사람이 입력한 데이터를 처리하는 방식 => 0, 2 두개의 숫자로만 가지고 데이터를 처리함 => 바이너리 코드라고 함 => 데이터 처리의 메모리 공간이 필요하게 됨 => 가장 최소단위의 메모리 조각은 bit => bit만 가지고서는 고사양의 데이터를 처리하려면 너무나 많은 bit를 사용 해야 하다보니 겈퓨터에 비효율 적인 로딩을 요구하게 됨 => bit를 더 큰 단위인 8개의 비트를 묶은 바이트라는 단위를 만듬

// 자바스크립트에서 변수를 선언 => 숫자형 타입 값을 할당하게 되면 => 대략적으로 64 비트 = 8바이트의 메모리 값이 할당 됨 =>
// 숫자가 아닌 객체와 배열을 부여하면 컴퓨터에 더 많은 메모리의 값이 필요하게 됨

// 전통적인 프로그래밍 언어들 => 굳이 비효율적으로 낭비 될 수 있는 메모리 공간을 생성하지 않기 위해서 Java나 C언어는 이터러블한 객체를 생성할 댸, 애초에 해당 객체에 얼만큼의 값을 넣을지 미리 정의 해 둠.

// JS 안에 배열이라는 자료구조 안에 5개 //10개의 값을 넣을지 컴퓨터는 예측할 수 없음

// 그래서 해결 하는 두 가지 방법이 있음
// 1. 굉장히 타이트하게 기본 값을 설정해놓고, 만약 그 타이트 한 값을 초과해서 메모리를 사용하고자 할 떄마다 값을 추가 시켜주거나
// 2. 애초에 값을 굉장히 큰 범위로 만들어놓고, 개발자가 어떠한 범위, 어떠한 용량의 값을 적용하더라도 문제가 없도록 하거나.
// => 둘 다 문제점이 있음

// JS에서 변수를 선언할 떄, 컴퓨터 메모리 공간에서 발생되는 현상 및 프로세스
// let a = 10;
// 01. 원시 타입은 변수의 영역이 생기고 주소와 데이터가 생김. 변수의 이름 a를 관리함. 그 다음 변수값 10을 가져올 때에는, (2차 데이터 주소)로 값을 불러옴
// 2차로 데어터 영역이 생김. 여기서 데이터 주소와 데이터가 생김. 그 다음 데이터 10을 저장함.
// 2차로 데이터 주소를 1번 값으로 불러오는 건, 같은 변수 값을 다른 변수에도 값이 같으면 새로 값을 생성해서 메모리를 쓰지 말고, 단순히 주소만 불러 오게 하려고.
// 원시 타입은 데이터 영역에서 원시적인 방법으로 바로 데이터 값을 바로 찾아온다

// let obj1 = {
//   c: 10,
//  d: "ddd",
// };
// 02. 참조 타입은 객체 영역이 별도로 생성됨
// 참조 타입은 2차 데이터 영역 외게 3차 객체 영역을 만들어서 거기서 주소와 데이터를 또 만듬. 변수값을 찾아올 시에, (3차 객체영역의 주소)를 2차 데이터 영역에 불러와서. 즉 주소값을 한번 더 참조해서 가져와야만 함.
// 변수 값을 한번 더 참조해서 가져온다는 의미로 참조 타입인 것.

// 값이 바뀌지 않게 할 수 있음 => 값이 바뀌지 않게 하는 함수를 만들면 됨

let user = {
  name: "David",
  gender: "male",
};

//let user02 = user;
// user02.name = "Jane"; 선언시 위에 이름이 바뀌어버리니까 이걸 막아야 함.

function copyObject(target) {
  let result = {};
  for (let props in target) {
    result[props] = target[props];
  }
  return result;
} // 막아주는 함수

const user2 = copyObject(user);
user2.name = "Jane";

// console.log(user.name, user2.name);

//
//
// 위 문법이 너무 길기에 2015년에 새 문법이 들어옴
// Spread Operator = 전개연산자 구문
//
//

/*
const fruits = ["apple", "banana", "cherry"];
const favorit = fruits; // 얕은 복사
favorit[1] = "grape";
console.log(fruits, favorit); // 둘 다 바뀌어버림
*/

const fruits = ["apple", "banana", "cherry"];
const favorit = [...fruits]; // ...  <- 깊은 복사
favorit[1] = "grape";
console.log(fruits, favorit); // 이제 둘은 같은 값이 아니게 됨.
