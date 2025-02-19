/* const str = "Good morning, everyone. Beautiful morning.";
/* console.log(str.indexOf("morning"));
console.log(str.indexOf("evening")); // 존재하지 않는 문자를 찾아올 땐 무조건 -1을 반환한다. */

/* let firstIndex = str.indexOf("morning");
console.log(str.indexOf("morning", firstIndex + 1)); // 2번째 morning 값을 찾아와라 */

/*  const str1 = "Hello, everyone.";

console.log(str1.startsWith("Hello"));
console.log(str1.startsWith("He"));
console.log(str1.startsWith("Hello, eve")); // 모두 true로 뜸
console.log(str1.startsWith("he")); // false로 뜸 대소문자를 구별하기 때문. */

// const str1 = "Hello, everyone.";

// console.log(str1.endsWith("everyone."));
// console.log(str1.endsWith("Everyone."));
// console.log(str1.endsWith("one."));
// console.log(str1.endsWith("lo, everyone"));

const str1 = "Hello, everyone.";
/* console.log(str1.startsWith("l", 2)); // startsWith 두번째 인자값은 !순번!을 나타냄! l이라는 인자값이 두번째 위치에서 시작하는게 맞나? true로 나옴
console.log(str1.endsWith("one.", 16)); // endsWith 두번째 인자값은 !문자열총길이!를 나타냄! 끝나는 위치를 묻는게 아니라 전체 길이 중에서 마지막인지를 묻는 것.
console.log(str1.endsWith("lo", 5)); */

/* console.log(str1.indexOf("every") === 7); // every 가 시작되는 지점이 7번째 인덱스에 있는게 맞나? = 이 문자가 존재하는지를 확인
console.log(str1.indexOf("every") !== 7); //  every 가 7번째에 없나? = 이 문자가 없는게 맞냐? */

console.log(str1.includes("every")); // 순서에 상관 없이 이 문자가 있는지만 확인
console.log(str1.includes("one")); // 부분적인 문자도 있는지 확인
