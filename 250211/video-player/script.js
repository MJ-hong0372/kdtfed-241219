const playButton = document.querySelector(".play-pause");
const video = document.querySelector("video");
const progressCover = document.querySelector(".progress"); //영상 끝과 끝을 잇고 있는 바 
const volumBar = document.querySelector("input[type='range']");
const fullButton = document.querySelector(".fullscreenBtn");
const rateButtons = document.querySelectorAll(".rate");

const play = () => {
  playButton.innerText = " | | ";
  video.play();
}; // 플레이 버튼

const pause = () => {
  playButton.innerText = " ▶ ";
  video.pause();
}; // 멈춤 버튼

const togglePlay = () => {
  video.paused ? play() : pause();
}; // 재생 버튼

const formatting = (time) => {
  let sec = Math.floor(time % 60);   //1초 , Math.floor는 소수점을 없애줌 1분을 60초로 나눈 나머지가 초
  let min = Math.floor(time / 60); // 1분은 60초 
  let hour = Math.floor(time / 3600);  //1시간은 60분 

  sec = sec < 10 ? `0${sec}` : sec; // 초가 한자리 수일때.
  min = min < 10 ? `0${min}` : min; // 분이 한자리 수일때.
  hour = hour < 10 ? `0${hour}` : hour; // 시간이 한자리 수일때.

  return `${hour}:${min}:${sec}`;
}; // 밀리터로 표시된 시간을 실제 시간으로 바꾸는 공식

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  current.innerText = formatting(video.currentTime); // 컴퓨터만 인지되는 초로 표시되기에 formatting() 함수 선언으로 바꿔줘야 함. formatting() 함수는 위에서 선언.
  duration.innerText = formatting(video.duration); // 컴퓨터만 인지되는 초로 표시되기에 formatting() 함수 선언으로 바꿔줘야 함.
}; // 재생 된 시간, 총 영상길이 표시

const updateProgress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle"); //원 포인트 
  const duration = video.duration;
  const currentTime = video.currentTime;
  const percent = (currentTime / duration) * 100; //백분률로 만들어주기
  progressBar.style.width = `${percent}%`;
  const progressBarWidth = progressCover.clientWidth; // clientWidth 속성은 어떤 문서의 내부 너비값을 찾아오는 요소 
  const newPosition = (currentTime / duration) * progressBarWidth; //너비 백분률로 만들기. 
  progressPointer.style.left = `${newPosition}px`; // 서클이 너비 백분률 따라가게 만들기. 
}; // 재생바

const setVolume = (e) => {
  video.volume = e.target.value;
}; //볼륨 크기 조절

const setRate = (e) => {
  const { rate } = e.target.dataset; // 구조분해할당 e.target.dataset.rate라고 rate를 두번 쓸 필요 없다.
  video.playbackRate = rate;
}; // playbackRate는 영상 재생 속도를 관리한다.

playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTime);
video.addEventListener("timeupdate", updateProgress);
volumBar.addEventListener("change", setVolume);
rateButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    setRate(e);
  });
});
fullButton.addEventListener("click", () => {
  video.requestFullscreen();
});