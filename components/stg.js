// super track generator
const musicGrid = document.getElementById('musicGrid');

function loadTracks() {
    for (let i = 0; i < tracks.length; i++) {

        let title = tracks[`${i}`].title;
        let description = tracks[`${i}`].description;
        let image = tracks[`${i}`].image;
        let scLink = tracks[`${i}`].scLink;
        let trackValueAttr = i
        let tags = tracks[`${i}`].tags;

        musicGrid.innerHTML += `
        <div class="trackBox" data-tag="${tags}">
        <div class="trackImage" style="background-image: url('${image}');">
            <img class="playBtn" track="${trackValueAttr}" src="../imgs/svgs/playMusic.png" alt="play-button">
        </div>
        <h1 class="trackTitle">${title}</h1>
        <p class="trackDescription">${description}</p>
        <div id="buttonsContainer">
            <a class="SCbtn" href="${scLink}" target="_blank"><img draggable="false"src="../imgs/svgs/soundcloud.svg" alt="soundcloud-icon"></a>
            <a class="detailsBtn" onclick="details()"><img draggable="false" src="../imgs/svgs/details.png" alt="details-icon"></a>
        </div>
    </div>
        `
    }
}
loadTracks()

const trackBox = document.querySelectorAll('.trackBox');
const trackImage = document.querySelectorAll('.trackImage');
const trackTitle = document.querySelectorAll('.trackTitle');
const trackDescription = document.querySelectorAll('.trackDescription');
const detailsBtn = document.querySelectorAll('.detailsBtn');
const SCbtn = document.querySelectorAll('.SCbtn');

// random index generator !  -- R I G -- (mover a documento por separado cuando sea necesario)
const urlBtn = document.querySelectorAll('#url');
let randomNumber = Math.abs(Math.floor(Math.random()*20 - 10));
if (window.matchMedia('screen and (max-width: 400px)').matches == true){}
