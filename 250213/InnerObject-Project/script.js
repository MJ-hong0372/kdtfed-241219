// InnerObject-Project : 내장객체
// const today = new Date();

// const toDay = () => {
//   const inputDate = new Date(document.querySelector("#date").value);
//   const today = new Date();
//   const curruntTime = today - inputDate;
//   const Days = Math.floor(curruntTimeTime / (1000 * 60 * 60 * 24));
// };
// console.log(toDay);

const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");

const current = document.querySelector("#current");
const resultDays = document.querySelector("#days");
const resultHours = document.querySelector("#hours");
const resultAge = document.querySelector("#age");

const today = new Date();
current.innerText = `${today.getFullYear()}년 ${
  today.getMonth() + 1
}월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분 현재 😁`;

btn.addEventListner("click", (e) => {
  e.preventDefault();
  const birthDate = new Date(
    birthYear.ariaValueMax,
    birthMonth.value - 1,
    birthDate.value
  );

  const passed = today.getTime() - birthDay.getTime();
  const passedDays = Math.floor(passed / (24 * 60 * 60 * 1000));
  const passedHours = Math.floor(passed / (60 * 60 * 1000));
  const passedAge = Math.floor(passed / (24 * 60 * 60 * 1000) / 365) + 1;

  resultDays.innerText = `날짜로는 ${passedDays}일이 흐르고, `;
  resultHours.innerText = `날짜로는 ${passedHours}일이 흐르고, `;
  resultAge.innerText = `제 나이는 ${passedAge}살 입니다. `;
});
