//
// 문제풀이

// 사용자에게 어떤 숫자를 받을 예정입니다!!
// 그 숫자가 소수인지 아닌지 판별하는 프로그램을 제작할 예정!
//  소수 => 소수점 X // 1과 본인 자신으로만 나눌 수 있는 숫자 = 소수
//

const number = parseInt(prompt("자연수를 입력하세요!"));
let isPrime; // 스위치 구문으로 참인지 거짓인지 왔다 갔다 할 수 있게 하기 위해 값은 선언하지 않는다.

if (!isNaN(number)) {
  if (number === 0 || number === 1) {
    alert(`${number}(은)는 소수도 합성수도 아닙니다!`);
    location.reload();
  } else if (number === 2) {
    isPrime = true;
    alert(`${number}는 소수입니다!`);
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        location.reload();
        break;
      } else {
        isPrime = true;
      }
    }
  }
} else {
  alert("😒숫자가 아닙니다!");
  location.reload();
} // !는 부정연산자 (!isNaN(number)) 숫자가 아닌 것의 아닌 것 = 숫자다.

if (isPrime) {
  alert(`${number}는 소수입니다!`);
} else {
  alert(`${number}는 소수가 아닙니다!`);
}
