const songs = document.querySelectorAll(".albumTable-song");
let currentAudio = null; //의도적으로 아무것도 넣지 않은 값이라고 표기

songs.forEach((song) => {
  const playBtn = song.querySelector(".fa-caret-right");
  const pauseBtn = song.querySelector(".fa-pause");

  playBtn.addEventListener("click", (e) => {
    const audio = e.target.closest("td").querySelector("audio");

    if(currentAudio && currentAudio !== audio) {
      currentAudio.pause();
    }

    audio.play();
    currentAudio = audio;
  });

  pauseBtn.addEventListener("click", (e) => {
    const audio = e.target.closest("td").querySelector("audio");
    audio.play();

    if(currentAudio === audio) {
      currentAudio = null;
    }
  });
});

