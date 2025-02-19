const email = document.querySelector("input[type='email']");
const button = document.querySelector("input[type='button']");
const result = document.querySelector("#result");

/* button.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value !== "") {
    let userName = email.value.split("@")[0];
    userName = userName.slice(0, 3);
    let domain = email.value.split("@")[1];

    result.innerText = `${userName}***@${domain}`;
  } // 보안을 위해 *처리해서 보여주는 것.
}); */

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value !== "") {
    let userName = email.value.split("@")[0];
    let domain = email.value.split("@")[1];

    let half = userName.length / 2;
    userName = userName.slice(0, userName.length - half);

    result.innerText = `${userName}***@${domain}`;
    email.value = "";
  } // 보안을 위해 *처리해서 보여주는 것.
});
