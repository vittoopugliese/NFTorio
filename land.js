const body = document.getElementById("landBg");
const spinning = document.getElementById("spinnerCenter");
const wrapper = document.querySelector("#landingBgWrapper");

window.onload = function () {
  body.style.overflow = "auto";
  landingBgWrapper.style.filter = "blur(0px)";
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
