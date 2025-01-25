/*
const fruits = ["apple", "banana", "grape"];

console.log(fruits);

//전개연산자 구문 = Spread operator
// 문자열로 출력됨
// console.log(...fruits);
*/

//
/*
const addNum = (a, b) => {
  return a + b;
};

console.log(addNum(1, 3, 5, 7));
*/

// const addNum = (...numbers) => {
//   let sum = 0;
//   /* numbers.forEach((number) => {
//     sum += number;
//   }); */
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }; //  console.log(typeof numbers, numbers); 배열은 변수로 가져올 수 있다. 배열은 이터너블한 객체고 자식이다.

// console.log(addNum(1, 3, 5, 7));

// 쇼핑몰 회원가입 때 필수 값과, 옵션 값이 있다. 사용자가 필수값 + (몇갠지 알수없는) 옵션값 선택 후 = 회원가입버튼을 누를 때 전개연산자구문이 필요하다.

const displayFavorites = (first, ...fruits) => {
  const str = `내가 가장 좋아하는 과일은 ${first} 입니다.`;
  return str;
};

console.log(displayFavorites("사과", "포도", "레몬"));

// 전산연산자 구문과 일만 매개와 혼용해서 사용 할 시에, 전개연산자 구문이 일반매개보다 앞에 있을 수 없다. 무조건 뒤에 와야 한다.
