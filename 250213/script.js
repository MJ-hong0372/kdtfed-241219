//원의 넓이 : πr²
// r = 반지름
// 원의 둘레 =  2πr

const radius = prompt("반지름의 크기는?");

const area = (r) => {
  return Math.PI * r * r;
}; // area값을 밖에서 쓰고 싶으면 return문을 쓴다.
// 원의 넓이

const circum = (r) => {
  return 2 * Math.PI * r;
}; //원의 둘레

const result = document.querySelector("#result");

result.innerText = `
반지름 : ${radius},
원의 넓이 : ${area(radius).toFixed(3)},
원의 둘레 : ${circum(radius).toFixed(3)},
`;
