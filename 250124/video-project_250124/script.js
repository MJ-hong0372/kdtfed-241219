// const articles = document.querySelectorAll("article");

// articles.forEach((article) => {
//   article.addEventListener("mouseenter", (event) => {
//     console.log(event.target);
//     console.log(event.currentTarget);
//     console.log(event);
//   });
// });

/** event.target : 이벤트가 적용된 대상(여기서는 article) / 이벤트가 탄생후 작용된 이후에도 찾아옴.

* event.currentTarget : 이벤트가 현재 작동하고 있는 대상 / 이벤트 객체가 탄생된 순간에 이벤트가 발생하지 않았기에 콘솔창에서는 null로 뜸. 영원히 null임. 브라우저를 킨 순간 이벤트는 실행되지 않고 끝남. currentTarget은 값은 실시간으로 찾아오는 것이 아님.
브라우저가 실행된 순간 currentTarget은 값은 영원히 null로 고정되고 끝남. 만약 이런 고정값이 아닐경우, 이벤트 버블링이 자동으로 생성되는 경우면 currentTarget은 엄청난 속도로 바뀌게 될 것이다. 콘솔창에 계속해서 찍히는 것을 막기 위해 기본 값을 null로 고정 함.

= 이벤트는 실시간으로 발생되지 않는다.


// 리엑트에서는 currentTarget만 가져온다. = dom이라는 개념을 알아야 이해 할 수 있다.

// 우리는 이미 Dom의 구조 안에서 하고 있다
우리가 작성한 html은 모두 객체다. 브라우저와 스크립트에서는 모든 것을 다 객체로 인식하고 있다.

// 리엑트에서는 우리가 작성한 dom을 실시간으로 찾아 올 수 없는 
상태다. = 사용자에게 빠르게 페이지를 보여주기 위해 탄생
// 최초의 컨텐츠, 브라우저(원본의 html=dom)을 스냅샷을 찍어놓고 복제품을 저장해서 원본 데이터와 비교한다. 서버는 특정시간에 따라 변경된 사항만 보내주면 빠르다.
// 바꿔진 부분만 바꿔주면 된다.
// 이 작업을 하기 위해 복제품 = 가상 dom이 필요하다.
// 가상 dom은 target을 찾아오지 못한다.
// 그래서 리액트에서는 currentTarget만 사용이 가능하다.

 */
const articles = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

articles.forEach((article) => {
  article.addEventListener("mouseenter", (event) => {
    event.target.querySelector("video").play();
  });

  article.addEventListener("mouseleave", (event) => {
    event.target.querySelector("video").pause();
  });

  article.addEventListener("click", (event) => {
    const tit = event.currentTarget.querySelector("h2").innerText;
    const txt = event.currentTarget.querySelector("p").innerText;
    const vidSrc = event.currentTarget
      .querySelector("video")
      .getAttribute("src");

    aside.querySelector("h1").innerText = tit;
    aside.querySelector("p").innerText = txt;
    aside.querySelector("video").setAttribute("src", vidSrc);

    aside.classList.add("on");
    aside.querySelector("video").play();
  });

  close.addEventListener("click", () => {
    aside.classList.remove("on");
    aside.querySelector("video").pause();
  });
});
