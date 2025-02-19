/* let str = " ab cd ef ";

console.log(str.trim()); 문자열의 앞 뒤 공백을 없애줌.
console.log(str.trimStart()); 앞쪽 공백만 없애줌
console.log(str.trimEnd()); 뒤쪽 공백만 없애줌  */

let str = "Good Morning.";
/* console.log(str.toUpperCase()); // 모두 대문자로 바꿔줌
console.log(str.toLowerCase()); // 모두 소문자로 바꿔줌 */

/* console.log(str.substring(5)); // 빈 문자열을 없애고 특정 문자열을 추출
console.log(str.substring(0)); // 빈 문자열을 없애고 전체 문자열이 추출 됨.
console.log(str.substring(0, 4)); // 시작 인자값, 본인의 인자값보다 바로 앞까지 추출함 (0~3까지 찾아오겠다는 뜻) */

console.log(str.slice(5)); // Morning. => substring과 똑같은 역할을 함.
console.log(str.slice(-5, 12)); // ning => 음수값을 가져올 수 있음.
console.log(str.substring(-5, 12)); // Good Morning이라고 뜸 => 음수값을 가져올 수 없음.
