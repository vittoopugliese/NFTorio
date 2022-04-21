// footer
const footer = document.getElementById('innerFooter');

footer.innerHTML = `
<div id="footerContainer">
        
<div class="webDescription">
    <a href="landhere.html" id="isologotipo"></a>
    <h4>World's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items. opensea footer test text !</h4>
</div>

<div id="separatorBar"></div>

<div class="socialMedia">
    <div class="socialMediaTexts">
        <h2>Stay in the loop</h2>
        <h4>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating.</h4>
    </div>

    <div class="footerEmailInputs">
        <input type="text" id="emailInputText" placeholder="Your Email Adress">
        <button id="emailInputButton">Sign up</button>
    </div>

    <div id="separatorBar"></div>

    <div class="mediaIcons">
        <h2>Join the community</h2>
        <div class="iconGroup">
            <div class="icon" onclick="discord()"><img src="../imgs/svgs/discord.svg" alt="discord-icon" draggable="false"></div>
            <div class="icon" onclick="instagram()"><img src="../imgs/svgs/instagram.svg" alt="instagram-icon" draggable="false"></div>
            <div class="icon" onclick="twitter()"><img src="../imgs/svgs/twitter.svg" alt="twitter-icon" draggable="false"></div>
            <div class="icon" onclick="reddit()"><img src="../imgs/svgs/reddit.svg" alt="reddit-icon" draggable="false"></div>
            <div class="icon" onclick="tiktok()"><img src="../imgs/svgs/tiktok.svg" alt="tiktok-icon" draggable="false"></div>
            <div class="icon" onclick="youtube()"><img src="../imgs/svgs/youtube.svg" alt="youtube-icon" draggable="false"></div>
        </div>
    </div>

    <div class="boringThings">
        <p>© 2021 - 2022 Torio Networks, Inc. </p>
        <p>Service Terms</p>
    </div>
</div>
</div>
`
// random index generator !
const nftorio = document.querySelectorAll('#isologotipo')[1]
nftorio.addEventListener('click', (e) => {
  e.preventDefault()
  setInterval(()=>{
    let randomNumber = Math.floor(Math.random() * 101);
  
    nftorio.style.filter = `invert(54%) sepia(98%) saturate(${470 + randomNumber}%) hue-rotate(${randomNumber * randomNumber}deg) brightness(86%) contrast(201%)`
  },3000)
})

// href functions 7u7
function discord() {
  window.open("discord");
}
function instagram() {
  window.open("instagram");
}
function twitter() {
  window.open("twitter");
}
function reddit() {
  window.open("reddit");
}
function tiktok() {
  window.open("tiktok");
}
function youtube() {
  window.open("youtube");
}
