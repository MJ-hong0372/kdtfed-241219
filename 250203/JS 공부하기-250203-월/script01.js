const button = document.querySelector("#bnt");

const showPrice = () => {
  const orginPrice = Number(document.querySelector("#origin-price").value);
  const rate = Number(document.querySelector("#rate").value);
  const savedPrice = orginPrice * (rate / 100);
  const resultPrice = orginPrice - savedPrice;
  console.log(resultPrice);

  document.querySelector("#result").innerText = `할인된 금액은 ${resultPrice}입니다!`;
};

button.addEventListener("click", showPrice);