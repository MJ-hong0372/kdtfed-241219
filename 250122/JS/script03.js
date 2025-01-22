// [1, 3, 5, 7, 9, 11, 13, 15 ,17, 19] 배열에서
// 10보다 큰 값만 찾아서 콘솔창에 출력
// 조건문과 반복문을 사용하기

// const arr = Number([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);

// if (arr > 10) {

//     console.log(arr);
//   }

// const arrs = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// arrs.forEach((arr) => {
//   if (arr > 10) console.log(arr);
// });
const arrs = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
for (let i = 0; i < arrs.length; i++) {
  if (arrs[i] > 10) console.log(`${arrs[i]}`);
}
