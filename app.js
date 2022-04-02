const body = document.getElementById("body");
const spinning = document.getElementById("spinnerCenter");
const wrapper = document.querySelector("#wrapper");
const nfts = 35

wrapper.style.filter = "blur(50px)";
window.onload = function () {
  body.style.overflow = "auto";
  wrapper.style.filter = "blur(0px)";
  setTimeout(() => {
    spinning.style.opacity = "0";
    setTimeout(() => {
      spinning.style.display = "none";
      window.scrollTo(0, 0);
    }, 500);
  }, 400);
};
window.onbeforeunload = function () {
  productModal.style.display = "none";
  modalBackground.style.display = "none";
  window.scrollTo(0, 0);
  wrapper.style.filter = "blur(30px)";
};

//web3
let web3;
async function connect() {
  await window.web3.currentProvider.enable();
  web3 = new web3(window.web3.currentProvider);
}

//array
const addedToGrid = document.querySelectorAll("#added");
const values = {
  nftTitle1: "Insanity",
  nftImage1: "imgs/nfts/nft1.png",
  nftDescription1: "Time travelling selfDrived virtual bot.",
  nftPrice1: "$75",
  nftUid1: "7f3354cb3a3d47c7",
  nfTags1: "Insanity, insanity",

  nftTitle2: "Protowave111",
  nftImage2: "imgs/nfts/nft2.png",
  nftDescription2: "Empathyless bot called Protoboy.",
  nftPrice2: "$75",
  nftUid2: "cc43bbe48eda480a",
  nfTags2: "Protowave111, protowave, protoboy, 111",

  nftTitle3: "OBSERVER",
  nftImage3: "imgs/nfts/nft3.png",
  nftDescription3: "You are never aware of him.",
  nftPrice3: "$75",
  nftUid3: "4e6592c887bb4d9a",
  nfTags3: "OBSERVER, observer",

  nftTitle4: "OBSERVER ® XL",
  nftImage4: "imgs/nfts/nft4.png",
  nftDescription4: "SE ® XL.",
  nftPrice4: "$75",
  nftUid4: "c89b01122fb846a1",
  nfTags4: "",

  nftTitle5: "dangerLeader",
  nftImage5: "imgs/nfts/nft5.png",
  nftDescription5: "You are always on danger cause of him.",
  nftPrice5: "$75",
  nftUid5: "d895fbbfe7124f2c",
  nfTags5: "dangerLeader",

  nftTitle6: "Kawaki.v1",
  nftImage6: "imgs/nfts/nft6.png",
  nftDescription6: "First token on the Kawaki NFT Collection.",
  nftPrice6: "$50",
  nftUid6: "9a24859a4c0444cd",
  nfTags6: "Kawaki, kawaki, v1",

  nftTitle7: "Kawaki.v2",
  nftImage7: "imgs/nfts/nft7.png",
  nftDescription7: "Second token on the Kawaki NFT Collection.",
  nftPrice7: "$50",
  nftUid7: "12663705d2d44982",
  nfTags7: "Kawaki, kawaki, v2",

  nftTitle8: "Kawaki.v3",
  nftImage8: "imgs/nfts/nft8.png",
  nftDescription8: "Third token on the Kawaki NFT Collection.",
  nftPrice8: "$50",
  nftUid8: "5192056c92324347",
  nfTags8: "Kawaki, kawaki, v3",

  nftTitle9: "Kawaki.v4",
  nftImage9: "imgs/nfts/nft9.png",
  nftDescription9: "Fourth token on the Kawaki NFT Collection.",
  nftPrice9: "$50",
  nftUid9: "acdb3acec66844e1",
  nfTags9: "Kawaki, kawaki, v4",

  nftTitle10: "Kawaki.v5",
  nftImage10: "imgs/nfts/nft10.png",
  nftDescription10: "Fifth token on the Kawaki NFT Collection.",
  nftPrice10: "$50",
  nftUid10: "56b8dc28f3e64051",
  nfTags10: "Kawaki, kawaki, v5",

  nftTitle11: "endlessScream.v1",
  nftImage11: "imgs/nfts/nft11.png",
  nftDescription11: "First token on the screamer cat NFT Collection.",
  nftPrice11: "$50",
  nftUid11: "c84519f4fcc34288",
  nfTags11: "endlessScream.v1",

  nftTitle12: "endlessScream.v2",
  nftImage12: "imgs/nfts/nft12.png",
  nftDescription12: "Second token on the screamer cat NFT Collection.",
  nftPrice12: "$50",
  nftUid12: "ad12288f079d4c11",
  nfTags12: "endlessScream.v2",

  nftTitle13: "endlessScream.v3",
  nftImage13: "imgs/nfts/nft13.png",
  nftDescription13: "Third token on the screamer cat NFT Collection.",
  nftPrice13: "$50",
  nftUid13: "88ed930bfe804df0",
  nfTags13: "endlessScream.v3",

  nftTitle14: "endlessScream.v4",
  nftImage14: "imgs/nfts/nft14.png",
  nftDescription14: "Fourth token on the screamer cat NFT Collection.",
  nftPrice14: "$50",
  nftUid14: "bcf8bcff07344958",
  nfTags14: "endlessScream.v4",

  nftTitle15: "endlessScream.v5",
  nftImage15: "imgs/nfts/nft15.png",
  nftDescription15: "Fifth token on the screamer cat NFT Collection.",
  nftPrice15: "$50",
  nftUid15: "",
  nfTags15: "endlessScream.v5",

  nftTitle16: "Annoyed Protoboy",
  nftImage16: "imgs/nfts/nft16.png",
  nftDescription16: "You don't want to be in front of him at his rage moment.",
  nftPrice16: "$50",
  nftUid16: "9b8b5bd050ef4744",
  nfTags16: "Annoyed Protoboy, protoboy",

  nftTitle17: "EVA.04",
  nftImage17: "imgs/nfts/nft17.png",
  nftDescription17: "Eva-04 Re-designed.",
  nftPrice17: "$50",
  nftUid17: "7cf1b19d127c4441",
  nfTags17: "Eva, eva, 04",

  nftTitle18: "Chuck-E",
  nftImage18: "imgs/nfts/nft18.png",
  nftDescription18: "Small size - big injuries.",
  nftPrice18: "$50",
  nftUid18: "74eb945e6f5f48ac",
  nfTags18: "Chuck-E, chuky",

  nftTitle19: "astroBot.v1",
  nftImage19: "imgs/nfts/nft19.png",
  nftDescription19: "Astro-boy was modified to kill every existing life forms.",
  nftPrice19: "$50",
  nftUid19: "ff38c1b3a42949b2",
  nfTags19: "astroBot",

  nftTitle20: "astroBot.v2",
  nftImage20: "imgs/nfts/nft20.png",
  nftDescription20: "He is no longer half human.",
  nftPrice20: "$50",
  nftUid20: "41e9c4063a224854",
  nfTags20: "astroBot",

  nftTitle21: "Texture.v1",
  nftImage21: "imgs/nfts/nft21.png",
  nftDescription21: "Feel free to use this image on your personal works.",
  nftPrice21: "$25",
  nftUid21: "caabea9c4ad74966",
  nfTags21: "Texture, texture, v1",

  nftTitle22: "Texture.v2",
  nftImage22: "imgs/nfts/nft22.png",
  nftDescription22: "Feel free to use this image on your personal works.",
  nftPrice22: "$25",
  nftUid22: "14b41570fdf04a90",
  nfTags22: "Texture, texture, v2",

  nftTitle23: "Texture.v3",
  nftImage23: "imgs/nfts/nft23.png",
  nftDescription23: "Feel free to use this image on your personal works.",
  nftPrice23: "$25",
  nftUid23: "08a09eeba88b430f",
  nfTags23: "Texture, texture, v3",

  nftTitle24: "Texture.v4",
  nftImage24: "imgs/nfts/nft24.png",
  nftDescription24: "Feel free to use this image on your personal works.",
  nftPrice24: "$25",
  nftUid24: "cf8ddd7f131b4155",
  nfTags24: "Texture, texture, v4",

  nftTitle25: "Texture.v5",
  nftImage25: "imgs/nfts/nft25.png",
  nftDescription25: "Feel free to use this image on your personal works.",
  nftPrice25: "$25",
  nftUid25: "40ca6d423e2b40ff",
  nfTags25: "Texture, texture, v5",

  nftTitle26: "Texture.v6",
  nftImage26: "imgs/nfts/nft26.png",
  nftDescription26: "Feel free to use this image on your personal works.",
  nftPrice26: "$25",
  nftUid26: "d873bf75e8bb4347",
  nfTags26: "Texture, texture, v6",

  nftTitle27: "Texture.v7",
  nftImage27: "imgs/nfts/nft27.png",
  nftDescription27: "Feel free to use this image on your personal works.",
  nftPrice27: "$25",
  nftUid27: "b552a0a6853d4d66",
  nfTags27: "Texture, texture, v7",

  nftTitle28: "Texture.v8",
  nftImage28: "imgs/nfts/nft28.png",
  nftDescription28: "Feel free to use this image on your personal works.",
  nftPrice28: "$25",
  nftUid28: "269a90aadbf440b6",
  nfTags28: "Texture, texture, v8",

  nftTitle29: "Texture.v9",
  nftImage29: "imgs/nfts/nft29.png",
  nftDescription29: "Feel free to use this image on your personal works.",
  nftPrice29: "$25",
  nftUid29: "0acef96486304dbe",
  nfTags29: "Texture, texture, v9",

  nftTitle30: "Texture.v10",
  nftImage30: "imgs/nfts/nft30.png",
  nftDescription30: "Feel free to use this image on your personal works.",
  nftPrice30: "$25",
  nftUid30: "2bee479dd5514470",
  nfTags30: "Texture, texture, v10",

  nftTitle31: "Texture.v11",
  nftImage31: "imgs/nfts/nft31.png",
  nftDescription31: "Feel free to use this image on your personal works.",
  nftPrice31: "$25",
  nftUid31: "b681c7b194c54f72",
  nfTags31: "Texture, texture, v11",

  nftTitle32: "Texture.v12",
  nftImage32: "imgs/nfts/nft32.png",
  nftDescription32: "Feel free to use this image on your personal works.",
  nftPrice32: "$25",
  nftUid32: "c9d20f6ae1124163",
  nfTags32: "Texture, texture, v12",

  nftTitle33: "Texture.v13",
  nftImage33: "imgs/nfts/nft33.png",
  nftDescription33: "Feel free to use this image on your personal works.",
  nftPrice33: "$25",
  nftUid33: "4bc30b973c2f4a85",
  nfTags33: "Texture, texture, v13",

  nftTitle34: "Texture.v14",
  nftImage34: "imgs/nfts/nft34.png",
  nftDescription34: "Feel free to use this image on your personal works.",
  nftPrice34: "$25",
  nftUid34: "691a57e1886c4848",
  nfTags34: "Texture, texture, v14",

  nftTitle35: "Texture.v15",
  nftImage35: "imgs/nfts/nft35.png",
  nftDescription35: "Feel free to use this image on your personal works.",
  nftPrice35: "$25",
  nftUid35: "1a26a8d0321a44b1",
  nfTags35: "Texture, texture, v15",
};

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
                  <button type="button" class="Fbtn">Buy</button>
                </a>
                <a id="inspect">
                  <button type="button" class="Sbtn">Inspect</button>
                </a>
            </div>
            
        </div>`;
  }
}
load();

// search
const searchText = document.querySelector("#search-text");
const searchInput = document.querySelector("#search-input");
const searchIcon = document.querySelector("#search-icon");
const aside = document.querySelector("#aside-wrapper");
const pGrid = document.querySelector("#productGrid");
const pBox = document.querySelectorAll(".productBox");
const productTitle = document.querySelectorAll('.productTitle');
const productDescription = document.querySelectorAll('.productDescription');
const productPrice = document.querySelectorAll('.productPrice');
const productImage = document.querySelectorAll('.productImage');

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
});
aside.addEventListener("mouseleave", () => {
  wrapper.style.filter = "blur(0px)";
  searchIcon.style.left = "5px";
  searchText.style.left = "-150px";
});

// inspect
const productModal = document.getElementById("productModal");
const modalBackground = document.getElementById("modalBackground");
const inspect = document.querySelectorAll("#inspect");

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < nfts; i++) {
    let image = values[`nftImage${i +1}`];
    let dataUid = values[`nftUid${i + 1}`];

    inspect[i].addEventListener("click", () => {
      productModal.style.display = "grid";
      productModal.innerHTML = `
            <h1 id="nftTitle" >${title[i].innerHTML}</h1>
            <div id="nftImage" style="background-image:url(${image});"></div>
            <p id="nftDescription">${description[i].innerHTML}</p>
            <p id="nftPrice">${price[i].innerHTML}</p>
            <div id="CryptoButtons">
                <a id="CryptoButtons" class="blockoPayBtn" data-toggle="modal" data-uid=${dataUid}>
                    <img src="imgs/svgs/bitcoin.svg" alt="bitcoin purchase button">
                </a>
                <a id="CryptoButtons">
                    <img src="imgs/svgs/ethereum.svg" alt="ethereum purchase button">
                </a>
                <a id="CryptoButtons">
                    <img onclick="share()" src="imgs/svgs/share.png" alt="share button">
                </a>
            </div>
            <img id="cruz" src="imgs/svgs/x.svg">`;

      productModal.style.display = "grid";
      modalBackground.style.display = "flex";
      body.style.overflow = "hidden";
      wrapper.style.filter = "blur(4px)";

      const cruz = document.querySelectorAll("#cruz");
      cruz[0].addEventListener("click", () => {
        modalBackground.style.display = "none";
        productModal.style.display = "none";
        body.style.overflow = "auto";
        wrapper.style.filter = "blur(0px)";
      });
      modalBackground.addEventListener("click", () => {
        productModal.style.display = "none";
        modalBackground.style.display = "none";
        body.style.overflow = "auto";
        wrapper.style.filter = "blur(0px)";
      });
      document.addEventListener("keydown", (event) => {
        const key = event.key;
        if (key == "Escape") {
          productModal.style.display = "none";
          modalBackground.style.display = "none";
          body.style.overflow = "auto";
          wrapper.style.filter = "blur(0px)";
        }
      });
    });
  }
});

// share
function share() {
  if ("share" in navigator) {
      navigator.share({
        title: "NFTorio Marketplace",
        text: 'Enter and take a look on this NFTs!',
        url: "https://nftorio.vittoriopugliese.com/",
      })
  }
}

const urlBtn = document.querySelectorAll('#url');

for (let i = 0; i < nfts; i++) {
  let url = `https://raw.githubusercontent.com/vittoopugliese/NFTorio/main/imgs/nfts/nft%20${i + 1}.png`
  let urlBtnIndex = urlBtn[i]
  urlBtnIndex.href = url
}


