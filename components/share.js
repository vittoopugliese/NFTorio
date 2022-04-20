// share
function share() {
    if ("share" in navigator) {
      navigator.share({
        title: "NFTorio Marketplace",
        text: "Enter and take a look on this NFTs!",
        url: "https://nftorio.vittoriopugliese.com/",
      });
    }
  }
  