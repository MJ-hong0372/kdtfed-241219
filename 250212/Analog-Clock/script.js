/* 호도법(radian)

π = 3.14 = 180°
2πr = 원의 둘레 = 360°
1radian = a라고 하면 이 둘레를 구하는 공식 = 약 57.3° 
2πr : a = 360 : r
360 x a = 2πr
a = πr² / 180
1도는 π/180 
1시간은 약 30° = π/180 * 30 = π/6 

12시 3시 6시 9시는 자리잡기 편함

offsetWidth = 자기자신의 너비값+패딩(여백)을 자동 계산 해줌
*/

// 1도는 π/180 
// 12 / 360° = 각 30°씩 유지

const nums = document.querySelectorAll(".number");
for(let i = 0; i < nums.length; i++) {
  if(i + 1 === 3 || i + 1 === 6 || i + 1 === 9 || i + 1 === 12) continue; // 이 요소는 제외하라.

  const angle = (i + 1) * (Math.PI / 6); // 30° = 1시
  const x = 132 - nums[i].offsetWidth + 132 * Math.abs(Math.sin(angle).toFixed(2)); // Math.abs = absolute 절대값이라는 뜻 음수이든 양수이든 동일한 값을 주겠다. toFixed 소수점자리 제어. 2는 둘째자리까지만 나태나라는 것.
  //offsetWidth = 자기자신의 너비값+패딩(여백)을 자동 계산해줌
  const y = 132 - 132 * Math.abs(Math.cos(angle).toFixed(2));

  if(i + 1 > 6) {
    nums[i].style.right = `${x}px`;
  } // 7,8,9 위치 x축 계산
  else {
    nums[i].style.left = `${x}px`;
  } // 1,2,4,5
  if ((i + 1 >= 9 && i + 1 <= 12) || (i + 1 >= 1 && i + 1 <= 3 )) {
    nums[i].style.top = `${y}px`;
  } //10,11 || 1,2 
  else {
    nums[i].style.bottom = `${y}px`;
  }
};

const hourPointer = document.querySelector("#hour");
const minutePointer = document.querySelector("#minute");
const secondPointer = document.querySelector("#second");

const clock = () => {
  const currentTime = new Date();
  
  let second = currentTime.getSeconds();
  let secondAngle = second * 6;
  let secondAngleValue = `rotate(${secondAngle}deg)`;

  let minute = currentTime.getMinutes();
  let minuteAngle = minute * 6;
  let minuteAngleValue = `rotate(${minuteAngle}deg)`;

  let hour = currentTime.getHours();
  let hourAngle = hour * 30 + (minute / 60) * 30; // 12시간이니 30도가 기본이지만, 60분을 기준으로 30이 백분률이 되어서 1시간 동안의 중간중간 시간이(1시 반, 1시 45분등등..) 더해져야만 한다. 
  let hourAngleValue = `rotate(${hourAngle}deg)`;

  secondPointer.style.transform = secondAngleValue;
  minutePointer.style.transform = minuteAngleValue;
  hourPointer.style.transform = hourAngleValue;
}

setInterval(clock, 1000);