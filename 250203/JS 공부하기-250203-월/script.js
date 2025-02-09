const fruitItems = document.querySelector("#items");

const displayfruit = () => {
 let selectedText = fruitItems.options[fruitItems.selectedIndex].innerText;
//  console.log(typeof fruitItems);
 alert(`[${selectedText}]를 선택 했습니다.`);
};

const fr = document.querySelector("#test");
let 

const frtest = () => {
  let newfr = fr.options[fr.selectedIndex].innerText;
  alert(`[${newfr}]를 선택 했습니다.`);
};
// const di = () => {
//  let se = fr.options[fr.se].innerText;
//  alert(`[${se}]를 선택 했습니다.`);
// }
// fr.addEventListener("change", di);


fruitItems.addEventListener("change", displayfruit);



// 모든 라디오버튼 가져오기
const rbs = document.querySelectorAll('input[type="radio"][name="info"]');
// 찾아온 라디오버튼에 이벤트
rbs.forEach((radio) => {
  radio.addEventListener("change", function () {
    // 사용자가 선택한 라디오버튼 값에 alert 출력
    alert(`${this.nextSibling.textContent.trim()}을 선택했습니다!`);
    // nextSibling.textContent.trim() : 이게 무엇인지는 스스로 찾아서 이해하시기 바랍니다!!! ㅋㅅㅋ
  });
});