// 사용자의 로그인을 허락해 주고자 함

// 사용자가 로그인을 하기 위한 정상적 정보는 id = ezen1234 / pw = 1234567로 설정하겠습니다.

// 사용자에게 id와 PW를 받아서 정상적인 정보라면 "00님 반갑습니다." 라는 알림창이 나오게 해주세요.
//만약 id가 잘못된 정보라면 "id가 일치하지 않습니다." 라는 메세지를 알림창으로 전달해주세요.

// 만약 패스퉈으가 잘못 된 정보라면 "PW가 일치하지 않습니다." 라는 메세지를 알림창으로 전달해주세요.

// let userID = prompt("ID를 입력해주세요.");
// let userPW = prompt("PW를 입력해주세요.");
// userID = String(userID);
// userPW = parseInt(userPW);

// if (userID !== "" || userID !== null || userPW !== "" || userPW !== null) {
//   if (userID === "ezen1234" || userPW === 1234567) {
//     alert("이젠님 반갑습니다.");
//   } else if (userID !== "ezen1234" || userPW === 1234567) {
//     alert("id가 일치하지 않습니다.");
//   } else if (userID === "ezen1234" || userPW !== 1234567) {
//     alert("PW가 일치하지 않습니다.");
//   }

//   window.location.reload();
// }

// sever 공간 안에 ID와 PW는 고정 상수값에 저장되어있어야 함

/* server */
const id = "ezen1234";
const pw = 1234567;

/* client */
const userName = prompt("당신의 이름을 입력하세요!");
if (userName !== "" && userName !== null) {
  const userID = prompt(`${userName}님 아이디를 입력하세요!`);
  if (userID !== "" && userID !== null) {
    if (userID === id) {
      const userPW = prompt(`${userName}님 반갑습니다. 패스워드를 입력하세요!`);
      if (userPW === pw) {
        alert(`${userName}님 오늘도 좋은 하루 되세요!`);
      } else {
        alert(`${userName}님 패스워드가 일치하지 않습니다.`);
        location.reload();
      }
    } else {
      alert("아이디가 일치하지 않습니다!");
      location.reload();
    }
  } else {
    alert("아이디를 입력하세요!");
    location.reload();
  }
} else {
  alert("정상적인 이름을 입력하세요!");
  location.reload();
}
