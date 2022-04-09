const body = document.getElementById("landingBody");
const spinning = document.getElementById("spinnerCenter");
const wrapper = document.querySelector("#landingWrapper");

window.onload = function () {
  body.style.overflow = "auto";
  landingWrapper.style.filter = "blur(0px)";
  setTimeout(() => {
    spinning.style.opacity = "0";
    setTimeout(() => {
      spinning.style.display = "none";
      window.scrollTo(0, 0);
    }, 500);
  }, 400);
};
window.onbeforeunload = function () {
  window.scrollTo(0, 0);

};

function toMarket() {
  window.location.href = 'index.html'
}