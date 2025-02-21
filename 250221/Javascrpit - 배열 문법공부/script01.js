const string = prompt("영문 소문자로 된 문자열을 입력해 주세요.");

// const firstCh = string[0].toUpperCase();
// const remainString = string.slice();
// const result = firstCh + remainString;

// split() => 문자열을 배열로 바꿔주는 역할
// join() => 배열을 문자열로 바꿔주는 역할
// concat() 서로 다른 두개의 배열 혹은 유사 배열을 1개로 합칠 때,

const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
document.write(result);
