/* 보통함수 */
const add1 = (a: number, b: number): number => a + b;

/* 고차함수 */
const add2 =
  (a: number): ((number: number) => number) =>
  (b: number) =>
    a + b;

// 자바스크립트의 closure = 클로저 개념을 알아야만 이 개념을 이해 할 수 있음. = 자바스크립트의 고급자가 될 수 있음.

const result = add2(1)(2);
/* 동시에 여러가지 기능을 처리해야 하는 멀티플레이어 기능을 사용하기 위한 경우는 고차 함수를 쓸 수 있어야 함. */
