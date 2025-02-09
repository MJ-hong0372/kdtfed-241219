// const container = document.querySelector("#container");
// const newVideo = document.createElement("video"); // Element = 비디오 태그생성
// const widthVideo = document.createAttribute("width"); // Attribute = width 속성 생성 
// const heightVideo = document.createAttribute("height");

// container.appendChild(newVideo); // container안에 자식요소로 비디오 속성을 생성한다. = DOM에서 노드를 생성한다. // 노드의 속성 또한 스크립트 안에서 제어하거나 새로 만들어 낼 수 있다.

// heightVideo.value = "400"; // Video에 height속성 값을 400으로 설정함
// newVideo.setAttributeNode(heightVideo); // newVideo에 height 속성 값을 설정함
// widthVideo.value = "700"; // Video에 width 속성 값을 700으로 설정함
// newVideo.setAttributeNode(widthVideo); // newVideo에 width 속성 값을 설정함
// // CSS 에서 끝날 요소를 JS에서 굳이 쓸 필요는 없다. 이건 이 기능이 있다는 것만 알려주는 것.

const videos = ["mv-1.mp4", "mv-2.mp4", "mv-3.mp4"] // 이걸 src 속성에 넣음 됨

const container = document.querySelector("#container");
const newVideo = document.createElement("video"); 
const srcVideo = document.createAttribute("src");
const autoVideo = document.createAttribute("autoplay");


srcVideo.value = `./videos/${videos[0]}`;
newVideo.setAttributeNode(srcVideo); // newVideo안에 src 속성을 넣었다. 반드시 Node로 가져와야 함. 자주 실수함.
newVideo.setAttributeNode(autoVideo); // 자동재생 기능 넣기기
container.appendChild(newVideo); 

newVideo.addEventListener("click", function () {
  if(this.paused) this.play();
  else this.pause();
})

