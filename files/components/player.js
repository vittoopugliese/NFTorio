// reproductor
const reproductor = document.getElementById("reproductor-container");
reproductor.innerHTML = `
    <div id="reproductor">
    <audio id="audio" preload="metadata">
        <source id="source" type="audio/mpeg">
    </audio>

    <img id="songPic" alt="player" draggable="false">
    <h4 id="songName"></h4>

    <input type="range" id="progressBar" value="0" min="0" max="10" step="0.1">
    <h4 id="songCurrentTime"></h4>
    <h4 id="songTime"></h4>
    <h4 id="separator">_</h4>

    <div id="controls">
        <img id="last" src="../../files/imgs/svgs/nextMusic.png" draggable="false">
        <img id="playpause" src="../../files/imgs/svgs/playMusic.png" draggable="false">
        <img id="next" src="../../files/imgs/svgs/nextMusic.png" draggable="false">
    </div>

    <input type="range" id="volumeRange" value="1" step="0.1" min="0" max="1">
    </div>
`

const audio = document.getElementById("audio");
const progressBar = document.getElementById("progressBar");
const songTime = document.getElementById("songTime");
const songCurrentTime = document.getElementById("songCurrentTime");
const songPic = document.getElementById("songPic");
const songName = document.getElementById("songName");
const vol = document.getElementById("volumeRange");
const playpause = document.getElementById("playpause");
const last = document.getElementById("last");
const next = document.getElementById("next");
const playBtn = document.querySelectorAll(".playBtn");

for (let i = 0; i < playBtn.length; i++) {
  playBtn[i].addEventListener("click", () => {
    let track = playBtn[i].getAttribute("track");
    localStorage.setItem("track", track);

    audio.src = tracks[`${track}`].src;
    songPic.src = tracks[`${track}`].image;
    songName.innerHTML = tracks[`${track}`].title;
    songTime.innerHTML = tracks[`${track}`].duration;
    playpause.src = "../../files/imgs/svgs/pauseMusic.png";
    audio.play();
    audio.onloadedmetadata = function () {
      progressBar.max = audio.duration;
    };
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("track")) {
    let track = localStorage.getItem("track");
    audio.src = tracks[`${track}`].src;
    songPic.src = tracks[`${track}`].image;
    songName.innerHTML = tracks[`${track}`].title;
    songTime.innerHTML = tracks[`${track}`].duration;

    audio.onloadedmetadata = function () {
      progressBar.max = audio.duration;
      // onloadingsong
    };
    vol.value = localStorage.getItem("vol");
    audio.volume = vol.value;
  }
});

playpause.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playpause.src = "../../files/imgs/svgs/pauseMusic.png";
  } else {
    audio.pause();
    playpause.src = "../../files/imgs/svgs/playMusic.png";
  }
});

vol.addEventListener("change", () => {
  audio.volume = vol.value;
  localStorage.setItem("vol", vol.value);
});

audio.addEventListener("timeupdate", function () {
  let currentTime = parseInt(audio.currentTime);
  let setCurrentTime = "00:0" + currentTime;

  if (currentTime > 9) {
    setCurrentTime = "00:" + currentTime;
  }
  if (currentTime > 59) {
    setCurrentTime = "01:0" + (currentTime - 60);
  }
  if (currentTime > 69) {
    setCurrentTime = "01:" + (currentTime - 60);
  }
  if (currentTime > 119) {
    setCurrentTime = "02:0" + (currentTime - 120);
  }
  if (currentTime > 129) {
    setCurrentTime = "02:" + (currentTime - 120);
  }
  if (currentTime > 179) {
    setCurrentTime = "03:0" + (currentTime - 180);
  }
  if (currentTime > 189) {
    setCurrentTime = "03:" + (currentTime - 180);
  }
  if (currentTime > 239) {
    setCurrentTime = "04:0" + (currentTime - 240);
  }
  if (currentTime > 249) {
    setCurrentTime = "04:" + (currentTime - 240);
  }

  songCurrentTime.innerHTML = setCurrentTime;
  progressBar.value = audio.currentTime;
});

progressBar.addEventListener("click", (e) => {
  let clickedValue = e.target.value;
  audio.currentTime = clickedValue;
  progressBar.value = clickedValue;
  console.log('hola')
});
