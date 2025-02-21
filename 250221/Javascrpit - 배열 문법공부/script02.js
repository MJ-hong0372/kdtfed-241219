// 1) 배열을 생성하는 방법 = 참조타입 변수 = 데이터 값을 직접넣지 않고, 주석으로 참조해서 넣음
// const지만 참조타입 변수여서 변화할 수 있는 것
// const season = []; // 깡통타입 변수
// season[0] = "spring";
// season[1] = "summer";

// console.log(season);

// // 2) 배열을 생성하는 방법
// const pets = ["dog", "cat", "mouse"];

// // 3) 배열을 생성하는 방법 // 배열은 Array라는 내장 객체를 가지고 있음. = class 로 만든 것

// const fruits = new Array("사과", "복숭아", "포도");

// // 4) 배열은 item에 접근 후 값을 변경 하려면 index를 쓸 수 있음
// pets[2] = "hamster";
// console.log(pets);

/* for 문은 배열의 전유물이다. 이터너블한 객체에만 쓸 수 있으니까
const colors = ["red", "green", "blue", "white", "black"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
} */
// forEach
// 콜백 함수 내 인자값이 1~3개까지 입력 가능!!!
// 인자값이 1개 : 배열 내 개별 아이템
// 인자값이 2개 : 개별 아이템과 인덱스
// 인자값이 3개 : 개별 아이템, 인덱스, 배열 그 자체
/*
const animals = ["lion", "bear", "bird"];
animals.forEach((animal, index, array) => {
  console.log(`[${array}][${index}]: ${animal}`);
});
*/

// 배열이 가지고 있는 주요 메서드 함수 시리즈
// 1. concat() : 서로 다른 배열 혹은 유사배열을 하나의 배열로 합치고자 할 때 사용 할 수 있는 메서드 함수

// const vegitable = ["양상추", "토마토", "피클"];
// const meat = ["불고기"];

// const meatBurger = vegitable.concat(meat, "빵"); // 빵이라고 내용 추가.
// console.log(meatBurger);

// const meatBurger = [...vegitable, ...meat, "빵"]; // 전개연산자 구문. + 일반적 item도 함께 넣을 수 있게 됨.
// console.log(meatBurger);

// const meatBurger = [vegitable, meat];
// console.log(meatBurger);

// 2.reverse() : 현재의 배열 내 아이템 순서를 역순으로 배치하고자 할 때 사용 할 수 있는 메서드 함수.

/*
const numbers = [6, 9, 3, 21, 18];
console.log(numbers); // (5) [6, 9, 3, 21, 18]
console.log(numbers.reverse()); // => (5) [18, 21, 3, 9, 6]
*/

// 3. sort(): 배열 안에 있는 아이템 들의 값을 정렬 하고자 할 때 사용 할 수 있는 메서드 함수
// 기본적으로 작은 값 부터 큰 값으로 정렬하는 오름차순의 형태를 띄고 있다!!
// a~z // 1~9

/*
const Week = ["sun", "mon", "tue"];
console.log(Week.sort());

const values = [5, 20, 3, 11, 4, 15]; // 문자열로 인식되기에 첫자리 숫자만 보고 정렬함.
console.log(values.sort()); // (6) [11, 15, 20, 3, 4, 5]
console.log(
  values.sort((a, b) => {
    // if (a > b) return 1;
    // if (a < b) return -1;
    // if (a === b) return 0;
    //  return a - b; 자바스크립트가 오름차순으로 문법화 함.
    return b - a; // 자바스크립트가 내림차순으로 문법화 함. 자바스크립트에서 음수로 하면 반대가 됨. - (a - b) = b - a와 동일하다.
  })
); // 콜백 함수로 정리가 필요하다.

*/

// 4. pop(), push() : 배열 안에 맨 뒤쪽부터 값을 제거하거나 혹은 추가하고자 할 때 사용가능한 메서드 함수.
/*
const animals = ["lion", "bear", "bird"];
console.log(animals);

console.log(animals.pop()); // bird => 제거의 대상임을 알려줌줌
console.log(animals); // (2) ['lion', 'bear']
animals.push("tiger");
console.log(animals); // (3) ['lion', 'bear', 'tiger']

// 5. shift(), unshift(); : 배열 안에 맨 앞쪽부터 값을 제거하거나 혹은 추가하고자 할 때 사용 가능한 메서드 함수

animals.shift();
console.log(animals); //(2) ['bear', 'tiger']

animals.unshift("dog");
console.log(animals); // (3) ['dog', 'bear', 'tiger']
*/

// 배열은 순번이 있기 때문에 이 모든게 가능함.
// 반대로 순번을 따라야 하기에 힘든 점도 있음. 순번을 따지지 않는 정보를 취합하는게 힘듬. 그 때 연결리스트의 형식으로 커스텀 된 함수로 순번을 부여하면서 자료구조를 가져오게 됨.

// 6. splice() : 배열 내 특정 위치에 있는 아이템 값을 추가 하거나 제거 하고자 할 때 사용가능한 메서드 함수.
// splice(위치, 개수) => 시작 인자값, 몇번째 위치로부터 몇개 BUT 원본 데이터 값을 바꿔버림
// 해당 위치부터 몇개를 제거할지 정하고 원본 데이터가 달라짐.

const subjects = ["html", "CSS", "JS", "TS", "react"];
console.log(subjects.splice(2)); // (3) ['JS', 'TS', 'react']
//  console.log(subjects.splice(2, 2)); => [] 라고 나옴

const test = subjects.splice(2, 2);
console.log(test); // []
console.log(subjects); // (2) ['html', 'CSS']

// 7. slice() =>
