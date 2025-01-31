// // 내가한거
// const bnt = document.querySelector("#toggle-btn > button");
// const bkgr = document.querySelector("#contents");

// bnt.addEventListener("click", () => {
//   bnt.innerText = "라이트 모드로 바꾸기";
//  if(!bkgr.classList.contains("active")) {
//   bkgr.classList.add("active")
//   } else {
//     bkgr.classList.remove("active")
//     bnt.innerText = "다크모드로 바꾸기";
//   }
// });



const toggleBtn = document.querySelector("button");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if(!document.body.classList.contains("dark")) {
    toggleBtn.innerText = "다크모드로 바꾸기"
  } else {
    toggleBtn.innerText = "라이트모드로 바꾸기"
  }
});