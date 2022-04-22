//image wrapper generator - iwg
const addedToGrid = document.querySelectorAll("#added");
const nfts = 36;

function load() {
  for (let i = 1; i < nfts; i++) {
    let title = values[`nftTitle${i}`];
    let image = values[`nftImage${i}`];
    let description = values[`nftDescription${i}`];
    let price = values[`nftPrice${i}`];
    let dataUid = values[`nftUid${i}`];
    let tag = values[`nfTags${i}`];

    addedToGrid[i].innerHTML += `
        <div class="productBox" data-tag="${tag}">

            <div class="productImage" style="background-image:url(${image});"></div>
            <h1 id="title" class="productTitle">${title}</h1>
            <p id="description" class="productDescription">${description}</p>
            <p id="price" class="productPrice">${price}</p>

            <div id="InspectButtons">
                <a class="blockoPayBtn" data-toggle="modal" data-uid="${dataUid}">
                  <button class="Fbtn">Buy</button>
                </a>
                <a id="inspect">
                  <button class="Sbtn">Inspect</button>
                </a>
            </div>
            
        </div>`;
  }
}

load();

// inspect
const productModal = document.getElementById("productModal");
const modalBackground = document.getElementById("modalBackground");
const inspect = document.querySelectorAll("#inspect");

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < nfts; i++) {
    let image = values[`nftImage${i + 1}`];
    let dataUid = values[`nftUid${i + 1}`];

    inspect[i].addEventListener("click", () => {
      setTimeout(() => {
        productModal.innerHTML = `
            <h1 id="nftTitle" >${title[i].innerHTML}</h1>
            <div id="nftImage" style="background-image:url(${image});"></div>
            <p id="nftDescription">${description[i].innerHTML}</p>
            <p id="nftPrice">${price[i].innerHTML}</p>
            <div id="CryptoButtons">
                <a id="CryptoButtons" class="blockoPayBtn" data-toggle="modal" data-uid=${dataUid}>
                    <img src="../imgs/svgs/bitcoin.svg" alt="bitcoin purchase button">
                </a>
                <a id="CryptoButtons">
                    <img src="../imgs/svgs/ethereum.svg" alt="ethereum purchase button">
                </a>
                <a id="CryptoButtons">
                    <img onclick="share()" src="../imgs/svgs/share.png" alt="share button">
                </a>
            </div>
            <img id="cruz" src="../imgs/svgs/x.svg">`;

        setTimeout(() => {
          productModal.style.opacity = "1";
          modalBackground.style.opacity = "1";
        }, 80);
        productModal.style.display = "grid";
        modalBackground.style.display = "flex";
        body.style.overflow = "hidden";
        wrapper.style.filter = "blur(4px)";

        const cruz = document.querySelectorAll("#cruz");
        cruz[0].addEventListener("click", () => {
          closeModal()
        });
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
    });
  }
});

function closeModal() {
  modalBackground.style.display = "none";
  productModal.style.display = "none";
  body.style.overflow = "auto";
  wrapper.style.filter = "blur(0px)";
  productModal.style.opacity = "0";
  modalBackground.style.opacity = "0";
}