// 객체는 최소한 자바스크립트에서 만큼은 최초의 근원이다!!
// 모든 것의 근원이다!!!

const arr = new Array(); // 배열을 만드는 방식을 보면 Array라는 것 또한 어딘가에서 미리 생성자함수로 선언 되어 있는것. 배열은 객체다.

console.log(typeof arr); // 콘솔창에서 object 라고 뜸.

// 배열 -> Iteruble(순회할 수 있는) 객체 = 반복 할 수 있다.
// 자식인 배열도 순회할 수 있다면 부모인 객체도 순회 할 수 있지 않을까?
// 어느 정도는 순회할 수 있지만, 객체는 키와 값이라는 복잡한 형태여서 별도의 메소드 함수가 있어야 한다.
// 그게 바로 for in문이다. 객체에서만 쓸 수 있다.

const bag = {
  type: "backpack",
  color: "blue",
  price: 30000,
};

for (let key in bag) {
  console.log(`${key} : ${bag[key]}`);
} //key 값을 가져왔으면 value 값을 대괄호 표기법으로 찾아올 수 있다. [key]는 변수값을 의미한다.
