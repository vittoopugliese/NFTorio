// preload
const body = document.getElementById("body");
const spinning = document.getElementById("spinnerCenter");
const wrapper = document.querySelector("#wrapper");

wrapper.style.filter = "blur(50px)";
window.onload = function () {
  body.style.overflow = "auto";
  wrapper.style.filter = "blur(0px)";
  setTimeout(() => {
    spinning.style.opacity = "0";
    setTimeout(() => {
      spinning.style.display = "none";
      window.scrollTo(0, 0);
    }, 400);
  }, 300);
};
window.onbeforeunload = function () {
  productModal.style.display = "none";
  modalBackground.style.display = "none";
  window.scrollTo(0, 0);
  wrapper.style.filter = "blur(30px)";
};
