// search
const searchText = document.querySelector("#search-text");
const searchInput = document.querySelector("#search-input");
const searchIcon = document.querySelector("#search-icon");
const aside = document.querySelector("#aside-wrapper");
const pGrid = document.querySelector("#productGrid");
const pBox = document.querySelectorAll(".productBox");
const productTitle = document.querySelectorAll(".productTitle");
const productDescription = document.querySelectorAll(".productDescription");
const productPrice = document.querySelectorAll(".productPrice");
const productImage = document.querySelectorAll(".productImage");

searchInput.addEventListener("keyup", (e) => {
  let target = e.target.value;
  for (let i = 0; i < 37; i++) {
    let pBoxed = pBox[i];
    let boxed = pBoxed.getAttribute("data-tag");
    let addedds = addedToGrid[i + 1];
    if (boxed.includes(target)) {
      pBoxed.style.display = "flex";
      pGrid.style.rowGap = "0px";
      addedds.classList.remove("hide");
    }
    if (!boxed.includes(target)) {
      pBoxed.style.display = "none";
      addedds.classList.add("hide");
    }
    if (target == "") {
      pBoxed.style.display = "flex";
      pGrid.style.rowGap = "40px";
      addedds.classList.remove("hide");
    }
  }
});
aside.addEventListener("mouseover", () => {
  wrapper.style.filter = "blur(4px)";
  searchIcon.style.left = "218px";
  searchText.style.left = "5px";
  magixs.style.left = "5px";
  normal.style.left = "5px";
});
aside.addEventListener("mouseleave", () => {
  wrapper.style.filter = "blur(0px)";
  searchIcon.style.left = "5px";
  searchText.style.left = "-150px";
  magixs.style.left = "-200px";
  normal.style.left = "-200px";
});

// fancy buttons
const magixs = document.querySelector("#magixs");
const normal = document.querySelector("#normal");

magixs.addEventListener("click", () => {
  for (let i = 0; i < nfts; i++) {
    productImage[i].classList.toggle("none");
    productPrice[i].style.display = "none";
    productTitle[i].style.display = "none";
    productDescription[i].style.display = "none";
    InspectButtons[i].style.display = "none";

    pBox[i].addEventListener("mouseover", () => {
      productImage[i].style.width = "300px";
      productImage[i].style.height = "300px";
    });
    pBox[i].addEventListener("mouseleave", () => {
      productImage[i].style.width = "";
      productImage[i].style.height = "";
    });
  }
});

normal.addEventListener("click", () => {
  for (let i = 0; i < nfts; i++) {
    productImage[i].classList.remove("none");
    productPrice[i].style.display = "flex";
    productTitle[i].style.display = "flex";
    productDescription[i].style.display = "flex";
    InspectButtons[i].style.display = "flex";
    pBox[i].addEventListener("mouseover", () => {
      productImage[i].style.width = "174px";
      productImage[i].style.height = "174px";
    });
  }
});

