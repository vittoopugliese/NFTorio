// track wrapper generator - twg
const musicGrid = document.getElementById('musicGrid');
const trackAddedToGrid = document.querySelectorAll("#trackAddedToGrid");

function loadTracks() {
    for (let i = 0; i < tracks.length; i++) {

        let trackValueAttr = i
        let tags = tracks[`${i}`].tags;
        let image = tracks[`${i}`].image;
        let title = tracks[`${i}`].title;
        let description = tracks[`${i}`].description;
        let scLink = tracks[`${i}`].scLink;
        let pageRef = tracks[`${i}`].pageRef;
        
        trackAddedToGrid[i].innerHTML += `
        <div class="trackBox" data-tag="${tags}">
            <div class="trackImage" style="background-image: url('${image}');">
                <img class="playBtn" track="${trackValueAttr}" src="../imgs/svgs/playMusic.png" alt="play-button">
            </div>
            <h1 class="trackTitle">${title}</h1>
            <h1 class="trackDescription">${description}</h1>
            <div id="buttonsContainer">
                <a class="detailsBtn" href="${pageRef}"><img draggable="false" src="../imgs/svgs/details.png" alt="details-icon"></a>
                <a class="SCbtn" href="${scLink}" target="_blank"><img draggable="false" src="../imgs/svgs/soundcloud.svg" alt="soundcloud-icon"></a>
                <img draggable="false" class="likeBtn" src="../imgs/svgs/like.svg" alt="like-user-icon">
            </div>
            </div>
        </div>
        `
    }
}
loadTracks()

// for track details 
const trackBox = document.querySelectorAll('.trackBox');
const trackImage = document.querySelectorAll('.trackImage');
const trackTitle = document.querySelectorAll('.trackTitle');
const trackDescription = document.querySelectorAll('.trackDescription');
const detailsBtn = document.querySelectorAll('.detailsBtn');
