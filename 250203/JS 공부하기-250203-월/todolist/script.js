const form = document.querySelector("form");
const userInput = document.querySelector("#todo-item");
const ul = document.querySelector("ul");

let todos = []; // 배열 형태로 값을 받아올 것

// const save = () => {
//   localStorage.setItem("todos", todos);
// }; --> 값을이해를 못할 것임. 이 말을 브라우저는 이해하지 못함

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
}; // JSON : 객체 표기법. 여러 언어를 서로 해석해주는 것 이제 ID 값을 가지게 되었으니 li에 부여하면 됨


// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // 새로고침 막기
  
//   if(userInput.value !== "") {
//     const li = document.createElement("li"); // li 생성하기
//     li.innerText = userInput.value; // 입력된 내용인 userInput.을 li값으로 받아와라라
//     ul.appendChild(li); // ul 아래에 li 자동 생성되게 하라라

//     userInput.value = ""; // 내용 자동으로 빈 칸으로 바꿔주기
//   }
// }); 콜백함수 클로저 하기 = 하단처럼 쪼개기 = 기능을 효율적으로 나누는게 깔끔한 코드를 짜는 것. 

const delItem = (event) => {
  const target = event.target.parentElement; // 삭제버튼 누르면 부모요소인 li를 찾아와라.
  todos = todos.filter((todo) => todo.id != target.id); //특정 ID 를 가진 버튼을 누른다 = 삭제 버튼을 누른 아이템 외의 ID로만 배열을 다시 만들어라. != (얕은비교)를 쓴 이유는 todo.id와 target.id의 형태가 다르기에 깊은 비교를 하면 오류가 나온다.
  save(); // Local storage 에서 삭제한 걸 적용해라
  target.remove(); // 해당 타겟을 DOM에서 제거하지만, Application > storage > Local storage 에서는 제거가 안됨.
};

const addItem = (todo) => {
  if(todo.text !== "") {
    const li = document.createElement("li"); 
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = todo.text;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);

    li.append(span, button); // appendChild와 다르게 매개변수를 여러개 한번에 가져올 수 있음
    li.id = todo.id; // todo의 ID 값을 새로 생성되는 li 에게 부여하겠다.
    ul.prepend(li);
  }
};

const handler= (event) => {
  event.preventDefault(); 
  const todo = {
    id: Date.now(), // 사용자가 입력해서 값이 생성되는순간의 시간을 밀리 초로 가져오겠다.
    text: userInput.value,
  }; // userInput.value를 객체의 형태로 생성해서 ID 값과 사용자 입력 값을 동시에 서버로 보내야 함
  todos.push(todo); // 배열 안에 todo 값을 넣겠다.
  save();
  addItem(todo);
  userInput.value = "";
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));// 서버에 Json 언어로 된 정보를 브라우저에서 읽을 수 있게 변환, 즉 파싱을 한다.
  if(userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    }); // 서버에 정보가 있을 때만 불러와라.
    todos = userTodos; // 새로고침 해도 이제 모든 정보가 날라가지 않음
  }
}; 

init(); // 서버에 저장된 정보 불라오기.
form.addEventListener("submit", handler);


// localStorage.setItem("hello", "world"); // 정보를 Local storage에 잠시 저장하는 법
// const myData = localStorage.getItem("hello"); // 정보 불러오기 ( 키 값만 입력)
// console.log(myData) // 콘솔창에서 확인하면 정보 값이 불러와짐
// // 여러가지 값을 한 키 값의 배열의 형태로 저장해서 불러와서 관리해야 함.

