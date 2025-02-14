const book1 = {
  title: "Javascript",
  pages: 648,
  buy: function () {
    console.log("I did buy this book");
  },
};
book1.buy();

// 객체 자료구조를 배열로 변환시킬 수 있을까?

const keys = Object.keys(book1); // 자료구조의 key를 배열로 만듬
console.log(typeof keys, keys); // 배열도 객체임. book1 내부의 key값을 배열로 바뀜.
const values = Object.values(book1); // 자료구조의 values를 배열로 만듬
console.log(values); // value값을 배열로 가져옴 함수도.
const entries = Object.entries(book1); // 자료구조의 키와 밸류값을 세트로 가져옴옴
console.log(entries); //
