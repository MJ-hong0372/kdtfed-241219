// regExp = regular Expression = 정규표현식
// 문자열 + 정규표현식 + 배열

// 1. 패턴을 만든다 : 찾고자 하는 문자의 형식을 하나의 정형화된 형태로 정의하는 것 = /정규식문법법/ 을 쓰면 됨.
// 2. 플래그 : 위에서 정의한 패턴의 값을 찾고자 할 때, 추가적인 옵션을 적용 할 수 있음.
// 3. 클래스 : 패턴 내 부가적인 정보를 적용하고 싶을 떄, 사용 할 수 있는 요소

// dedimal = 정규표현식에서의 숫자

/* * 정규표현식의 메서드 함수 * */

/* const regexp = /\d{3}/; // 숫자 3개로 된 정규표현식
console.log(typeof regexp); 타입이 object = 객체 / 메서드 함수나 속성을 쓸 수 있다는 것

console.log(regexp.test("hello")); // test : 선언한 정규표현식과 같은지 여부를 판단 / 다르면 false
console.log(regexp.test("123")); // 숫자도 문자열의 형태로 넣어야 함 / 같으면 true */

// 내장객체 > 대부분 class 혹은 생성자 함수로 만들어져 있음.
// new 라는 예약어를 씀.
/*
const regexp = new RegExp(/\d{3}/); // 위와 같은 내용임.

console.log(regexp.test("hello"));
console.log(regexp.test("123"));

const str = "ES2025 is poweful"; // 빈칸도 문자열이다.
const pattern = /ES2025/;
console.log(str.match(/ES2025/)); // ES6라는 값이 있으면 나타내고 없으면 null
console.log(str.match(pattern)); // 위와 결과 값이 같음
// ['ES2025', index: 0, input: 'ES2025 is poweful', groups: undefined] 0번 인덱스 값을 가진 것을 알 수 있다.
console.log(str.replace(pattern, "Love")); // 문자열 가운데 정규표현식 패턴에 일치하는 문자열을 찾아서 새로운 문자열로 대체해주는 메서드 함수 
*/

/* * 정규표현식의 주요 플래그 * */

/*
1. i = internationl의 약어. 영문의 대, 소문자를 구별하지 않고 문자열을 찾고 싶을 때.
2. g = 문자열 가운데 사전에 정의한 패턴과 일치하는 모든 요소를 찾아오고 싶을 때 // 만약 g를 사용하지 않는다면, 좌측부터 시작되는 문자열 가운데 가장 먼저 찾아낸 요소만 반환 함.
3. m =  문자열의 행이 바뀌어도 검색 가능  // 행이 바뀌면 다른 문자열로 인식하지만 m은 동일한 문자열로 인식함.
 */

/*
const str = "Love is powerful!";

const pattern = /love/;

console.log(pattern.test(str)); // 대소문자를 구별해서 반환하기 때문에 false로 반환환

const pattern01 = /love/i; // i라는 플래그를 넣어줌
console.log(pattern01.test(str)); // true로 나옴 */

/* * 정규표현식의 주요 Class * */

/*
클래스 : 패턴 내 부가적인 정보를 적용하고 싶을 때, 사용 할 수 있는 요소
항상 대 소문자를 주의해서 써야 함(소문자는 무언가 가져올 때, 대문자는 보통 소문자를 부정하는 의미가 됨.)

1. \d = 0~9사이의 숫자를 가져오고자 할 때 씀
2. \D = 숫자가 아닌, 모든 문자만을 의미
3. \s  = 공백, 탭, 줄바꿈 등을 찾아오고 싶을 때
4. \S  = 공백이 아닌 모든 문자을 찾고자 할 때
5. \w = 단어에 들어가는 개별적인 문자를 찾아오고자 할 때
6. \W = 단어에 들어가지 않는 모든 문자
*/

/*
const str = "Love is Power7!";
const pattern = /Power\d/; // Power뒤에 0~9 사이 숫자
console.log(str.match(pattern)); // ['Power7', index: 8, input: 'Love is Power7!', groups: undefined] 
*/

/*
const str = "Love is Power777!";
const pattern = /Power\d/; // Power뒤에 0~9 사이 숫자
console.log(str.match(pattern)); //['Power7', index: 8, input: 'Love is Power777!', groups: undefined] 1개 밖에 못 찾아옴.
*/
/*
const str = "Love is Power777!";
const pattern = /Power\d{3}/; // Power뒤에 0~9 사이 숫자
// const pattern = /Power\d\d\d/; 위와 같은 뜻이지만 위를 더 많이 사용함.
console.log(str.match(pattern)); // ['Power777', index: 8, input: 'Love is Power777!', groups: undefined] 3개 다 찾아옴.
*/

/* * 정규표현식의 특수문자 * */
/*
1. ^(*캐럿) = 특정 문자로 시작하는 문자열을 찾고 싶을 때
2. $(*달러) = 특정 문자로 끝나는 문자열을 찾고 싶을 때
*/

/*
const hello = "hello. everyone";
const pattern = /H/i; // 대소문자 상관 없이 찾기 위해 i
console.log(pattern.test(hello)); // true로 표시됨

const pattern01 = /^o/i;
console.log(pattern01.test(hello)); // false로 표시됨

const pattern02 = /com$/i; // com으로 끝나는지 여부 = 이메일인지 아닌지 확인 하기 위해 많이 씀
console.log(pattern02.test(hello)); // false로 표시됨
*/

/*
const hello = "hello. everyone";
console.log(/one.$/.test(hello)); // false
console.log(/e.$/.test(hello)); // false
console.log(/one$/.test(hello)); // true
*/

/*
const str = "ES2025";
str.match(/[0-9]/); // 숫자 = 0~9 안에 들어가는 모든 숫자
console.log(str.match(/[0-9]/)); // ['2', index: 2, input: 'ES2025', groups: undefined] 2를 반환

const str01 = "ES2025";
console.log(str01.match(/[0-9]/g)); // (4) ['2', '0', '2', '5']  => [범위입력]  => 해당 범위에 속하는 값들을 찾아서 배열의 형태로 반환

const str02 = "ES2025";
console.log(str02.match(/^[0-9]/g)); // null  = 숫자로 시작하는 값이 없다는 뜻

const str03 = "ES2025";
console.log(str03.match(/[^0-9]/g)); // (2) ['E', 'S'] 을 찾아옴 = 전체 문자열에서 0~9를 제외한(not) 모든 요소를 찾아오라는 뜻이 됨.

// 위치에 따라 값이 완전히 달라짐

*/

/* * 정규표현식의  반복검색 * */
// {반복하고자 하는 횟수}

/*
const str = "Oooooooooops";
console.log(str.match(/o/)); // ['o', index: 1, input: 'Oooooooooops', groups: undefined]

const str01 = "Oooooooooops";
console.log(str01.match(/o{3}/)); // ['ooo', index: 1, input: 'Oooooooooops', groups: undefined]

const str02 = "Oooooooooops";
console.log(str02.match(/o{2,}/)); // ['ooooooooo', index: 1, input: 'Oooooooooops', groups: undefined] 2 이상이 되는 모든 것을 다 찾아옴.

const str03 = "Oooooooooops";
console.log(str03.match(/o{2,}/i)); // ['Oooooooooo', index: 0, input: 'Oooooooooops', groups: undefined] 0번째부터 모든것을 한번에 다 찾아옴.

const str04 = "Oooooooooops";
console.log(str04.match(/o{2,4}/i)); // ['Oooo', index: 0, input: 'Oooooooooops', groups: undefined] 2번 이상이면서 4번째 까지의 값
*/

const number = /^[0-9]+$/; // 패턴인데 0-9까지 범위, 0~9로 시작, 몇자리 숫자이이던간에 끝에도 숫자로 끝나야 함. 이런 반복 형태로 종결

const positive = /^[1-9]\d*$/; // 양수 1~9로 시작하지만, 뒷자리는 0도 포함한 숫자로 끝날 수 있으며 이런 반복 형태로 종결 위와 아래식은 같은 뜻임.

const nagative = /^\-[1-9]\d*$/; // 음수 =  양수 앞에 마이너스. -를 인식하지 못해서 \를 쓰면 -로 인식함

const engword = /^[a-zA-Z]+$/; // 소문자 a-z 대문자 A-Z 범위, 이런 형태로 반복 후 종결

const engandword = /^[a-zA-Z0-9]+$/; // 해당 범위 안의 문자열만 허용 하겠다. 이런 형태의 반복 후 종결

const korean = /^[가.힣]+$/; //자음과 모음으로 시작 => 첫번째 자음+ 첫번쨰 모음 . 마지막 자음 + 마지막 모음 + 마지막 받침 => 반복적 패턴을 써라.

const koreanandenglish = /^[가.힣a-zA-Z]+$/; // 한글과 영어 대소문자
