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
    
    <div id="topBar">
      <img id="playerMin" src="../imgs/svgs/playerMin.png" draggable="false">
    </div>
   
    <img id="last" src="../imgs/svgs/nextMusic.png" draggable="false">
    <img id="playpause" src="../imgs/svgs/playMusic.png" draggable="false">
    <img id="next" src="../imgs/svgs/nextMusic.png" draggable="false">

    <input type="range" id="volumeRange" value="1" step="0.1" min="0" max="1">
    </div>
`;

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
const playerMin = document.getElementById("playerMin");
const topBar = document.getElementById("topBar");
const playBtn = document.querySelectorAll(".playBtn");

for (let i = 0; i < playBtn.length; i++) {
  playBtn[i].addEventListener("click", () => {
    let track = playBtn[i].getAttribute("track");
    localStorage.setItem("track", track);
    audio.src = tracks[`${track}`].src;
    songPic.src = tracks[`${track}`].image;
    songName.innerHTML = tracks[`${track}`].title;
    songTime.innerHTML = tracks[`${track}`].duration;
    playpause.src = "../imgs/svgs/pauseMusic.png";
    playerUp()
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
    playpause.src = "../imgs/svgs/pauseMusic.png";
  } else {
    audio.pause();
    playpause.src = "../imgs/svgs/playMusic.png";
  }
});

vol.addEventListener("change", () => {
  audio.volume = vol.value;
  localStorage.setItem("vol", vol.value);
});

audio.addEventListener("timeupdate", function () {
  let currentTime = parseInt(audio.currentTime);
  let m = 0
  let s = 0
  
  m = (m<10) ? '0' + m : m
  s = (s<10) ? '0' + s : s
  
  let setCurrentTime = m + ':' + s
  songCurrentTime.innerHTML = setCurrentTime;
  progressBar.value = audio.currentTime;
  
  progressBar.style.accentColor = `hsl(${currentTime}, 100%, 50%)`
});

progressBar.addEventListener("click", (e) => {
  let clickedValue = e.target.value;
  audio.currentTime = clickedValue;
  progressBar.value = clickedValue;
});

topBar.addEventListener("click", () => {
  localStorage.setItem('playerOnDisplay', false)
  playerDwn()
});

reproductor.addEventListener("mouseover", () => {
  localStorage.setItem('playerOnDisplay', true)
  playerUp()
});

if(localStorage.getItem('playerOnDisplay') == 'true'){
  playerUp()
}
if(localStorage.getItem('playerOnDisplay') == 'false') {
  playerDwn()
}

function playerUp() {
  reproductor.style.height = '82px';
  progressBar.style.bottom = '4px'
  vol.style.bottom = '30px'
  playerMin.style.transform = 'rotate(0deg)'
  songPic.style.top = '2px'
  mask.style.bottom = '90px'
  magixs.style.bottom = '185px'
  normal.style.bottom = '140px'
}
function playerDwn() {
  reproductor.style.height = '10px';
  progressBar.style.bottom = '-100px'
  vol.style.bottom = '-100px'
  playerMin.style.transform = 'rotate(180deg)'
  songPic.style.top = '20px'
  mask.style.bottom = '20px'
  magixs.style.bottom = '120px'
  normal.style.bottom = '75px'
}

if(reproductor.style.height = '82'){
  magixs.style.bottom = '185px'
  normal.style.bottom = '140px'
} else{
  magixs.style.bottom = '120px'
  normal.style.bottom = '75px'
}

// detect page and execute this (apparently working...) // host variable in search.js

if (window.location.href == host + "pages/images.html") {
  if (!localStorage.getItem("track")) {
    reproductor.style.display = "none";
  } else {
    reproductor.style.display = "flex";
  }
}

if (window.location.href == host + "index.html") {
  if (localStorage.getItem("track")) {
    reproductor.style.display = "flex";
  } else {
    reproductor.style.display = "none";
  }
}

if (!localStorage.getItem("track")) {
  localStorage.setItem("track", 0);
}
