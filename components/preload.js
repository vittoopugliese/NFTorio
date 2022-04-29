// preload
const body = document.getElementById("body");
const preLoad = document.getElementById("preLoad");
const wrapper = document.querySelector("#wrapper");
preLoad.innerHTML = `
<img alt="preloadImg" draggable="false" style="width: 5.4rem; height: 5.4rem;" src="../imgs/svgs/spinner.svg"alt="nav-brand-spinner">
<img alt="preloadImg" draggable="false" style="width: 220px;margin-top: 10px;" src="../imgs/nftorio.png" alt="nav-brand-logo">
`

wrapper.style.filter = "blur(50px)";

window.onload = function () {
  const rn = Math.floor(Math.random() * 20) + 1;
  localStorage.setItem('tracks', rn)
  
  body.style.overflow = "auto";
  wrapper.style.filter = "blur(0px)";
  setTimeout(() => {
    preLoad.style.opacity = "0";
    setTimeout(() => {
      preLoad.style.display = "none";
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
