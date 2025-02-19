// 문자열 변수 안에 담길 수 있는 원시 타입.
// 다른 원시 타입 변수들()과 다름 배열과 유사성을 가지고 있지만 배열은 아님. 유사배열이라고도 부름
// 문자열은 유사배열이다!

// const str = "Hello";
//  console.log(str.length); 배열에 쓰이는 length 속성값을 쓸 수 있다.
// console.log(typeof str); 콘솔창에 string이라고 뜸

// 문자열에는 다양한 메서드 함수들이 있다.

// const str = "Good Morning!"; G가 0번째 index임. 빈 공간도 인식 됨. 13개의 인덱스를 가진  아이템인 것.
// console.log(str.length); 빈 공간도 인식 됨. 13개의 인덱스를 가진  아이템인 것.

// console.log(str.charAt(3)); charAt(3) 문자열 위치 확인 메서드 함수. 인자값으로 들어오는 인덱스 값을 찾아옴.
// console.log(str[3]); ES6에서 나온 charAt 메서드 함수 대체법 문자열을 유사배열로 보는 이유 중 하나

const string = prompt("문자열을 입력하세요!");
const letter = prompt("어떤 문자를 체크하겠습니까?");

const counting = (string, letter) => {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) count += 1;
  }
  return count;
};

const result = counting(string, letter);
document.write(`${string}에는 ${letter}가 ${result}개 있습니다.`);
