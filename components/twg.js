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

        trackAddedToGrid[i].innerHTML += `
        <div class="trackBox" data-tag="${tags}">
            <div class="trackImage" style="background-image: url('${image}');">
                <img class="playBtn" track="${trackValueAttr}" src="../imgs/svgs/playMusic.png" alt="play-button">
            </div>
            <h1 class="trackTitle">${title}</h1>
            <p class="trackDescription">${description}</p>
            <div id="buttonsContainer">
                <a class="SCbtn" href="${scLink}" target="_blank"><img draggable="false" src="../imgs/svgs/soundcloud.svg" alt="soundcloud-icon"></a>
                <a class="detailsBtn"><img draggable="false" src="../imgs/svgs/details.png" alt="details-icon"></a>
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

const modalBackground = document.getElementById("modalBackground");
const trackModal = document.getElementById("trackModal");

// setTimeout(() => {
//     trackModal.style.opacity = "1";
//     modalBackground.style.opacity = "1";
//   }, 80);
//   trackModal.style.display = "grid";
//   modalBackground.style.display = "flex";

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < tracks.length; i++) {
        detailsBtn[i].addEventListener('click', () => {
            setTimeout(() => {
                trackModal.innerHTML = `
                
                `
                setTimeout(() => {
                  trackModal.style.opacity = "1";
                  modalBackground.style.opacity = "1";
                }, 80);
                trackModal.style.display = "grid";
                modalBackground.style.display = "flex";
                body.style.overflow = "hidden";
                wrapper.style.filter = "blur(4px)";
        
                // const cruz = document.querySelectorAll("#cruz");
                // cruz[0].addEventListener("click", () => {
                //     closeModal()
                // });

                modalBackground.addEventListener("click", () => {
                    closeModal()
                });
                document.addEventListener("keydown", (event) => {
                  const key = event.key;
                  if (key == "Escape") {
                    closeModal()
                  }
                });
              }, 150);
        })
    }
})

function closeModal() {
    modalBackground.style.display = "none";
    trackModal.style.display = "none";
    body.style.overflow = "auto";
    wrapper.style.filter = "blur(0px)";

    trackModal.style.opacity = "0";
    modalBackground.style.opacity = "0";
}