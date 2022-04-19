const body = document.getElementById("landingBody");
const spinning = document.getElementById("spinnerCenter");
const wrapper = document.querySelector("#landingWrapper");
const nfts = 36;

window.onload = function () {
  body.style.overflow = "auto";
  landingWrapper.style.filter = "blur(0px)";
  setTimeout(() => {
    spinning.style.opacity = "0";
    setTimeout(() => {
      spinning.style.display = "none";
      window.matchMedia('screen and (max-width: 400px)').matches == true
    }, 500);
  }, 400);
};
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function toMarket() {
  window.location.href = "index.html";
}


// background index things
const imageDiv1 = document.querySelector("#imageDiv1");
const imageDiv2 = document.querySelector("#imageDiv2");
const imageDiv3 = document.querySelector("#imageDiv3");

// scroll logo
window.addEventListener('scroll', () => {
  if (window.scrollY > 25) {
    isologotipo.classList.remove("isologotipoEnMedio")

    let scrollY = window.scrollY

    imageDiv1.style.right = `${scrollY}px`
    imageDiv2.style.right = `-${scrollY + 10}px`
    imageDiv3.style.right = `${scrollY + 30}px`

  }
  if (window.scrollY < 100) {
    isologotipo.classList.add("isologotipoEnMedio");
  }
})


// random index generator !  -- R I G --
const urlBtn = document.querySelectorAll('#url');
let randomNumber = Math.abs(Math.floor(Math.random()*20 - 10));

imageDiv1.style.backgroundImage = `url(https://raw.githubusercontent.com/vittoopugliese/public-imgs/main/NFTorio/imgs/NFTs/nft${randomNumber + 1}.webp)`;
imageDiv2.style.backgroundImage = `url(https://raw.githubusercontent.com/vittoopugliese/public-imgs/main/NFTorio/imgs/NFTs/nft${randomNumber + 5}.webp)`;
imageDiv3.style.backgroundImage = `url(https://raw.githubusercontent.com/vittoopugliese/public-imgs/main/NFTorio/imgs/NFTs/nft${randomNumber+ 3}.webp)`;


if (window.matchMedia('screen and (max-width: 400px)').matches == true){

}

document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(100, 0);
})