// const form = document.querySelector("form");

// form.addEventListener("submit", (event) => {
// });  // event는 e로 쓸 수 있다.

// form.addEventListener("submit", (e) => {
//   e.preventDefault(); // submit이 서버로 보내는 기능 무력화
//   const inputText = document.querySelector("input[type='text]");
//   const word = inputText.value;
//   const count = word.length;
//   console.log(word);
//   alert(`입력하신 ${word}의 글자수는 ${count}입니다.`)
// });

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputText = document.querySelector("input[type='text']");
  const word = inputText.value;
  const count = word.length;
  alert(`입력하신 ${word}의 글자수는 ${count}입니다.`);
});