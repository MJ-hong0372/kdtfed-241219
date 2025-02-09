// JS코딩 테스트 문제 2

/*길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어졌을 때, 이 세 막대로 삼각형을 만들 수 있다면 콘솔창에 "Yes"를 출력하고, 만들 수 없으면 "No"를 출력한다.
(*삼각형이 되려면 두 변의 길이의 합이 나머지 한 변의 길이 값보다 커야합니다.)*/
const a = Number(prompt(alert("삼각형 a변 값을 입력하세요")));
const b = Number(prompt(alert("삼각형 b변 값을 입력하세요")));
const c = Number(prompt(alert("삼각형 c변 값을 입력하세요")));

const triangle = () => { 
  if("a > b + c") {alert("yes")};

};