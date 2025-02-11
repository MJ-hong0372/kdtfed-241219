const playButton = document.querySelector(".play-pause");
const video = document.querySelector("video");

const play = () => {
  video.play();
};

const pause = () => {
  video.pause();
};

const togglePlay = () => {
  video.paused ? play() : pause();
}

playButton.addEventListener("click", togglePlay);
