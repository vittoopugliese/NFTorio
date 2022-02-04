window.onload = function(){
    const body = document.getElementById('bodyenso');
    const spinning = document.getElementById('spinnerCenter');
    body.style.overflow = 'auto';
    spinning.style.display = 'none';
}
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
// theme
const themeSwitchTo1 = document.querySelector('#theme1')
const themeSwitchTo2 = document.querySelector('#theme2')
const navClass = document.querySelector('#menu')
const themeClass = document.querySelector('#themeBtn')

themeSwitchTo1.addEventListener('click', ()=>{
    document.body.style.backgroundImage = 'linear-gradient(to Top, rgb(110, 110, 110) 0%, white 100%)'
    document.body.classList.remove('dark')
    document.body.classList.add('light')
    navClass.classList.remove('bg-dark')
    navClass.classList.add('bg-secondary')
    navClass.classList.remove('navbar-dark')
    navClass.classList.add('navbar-light')
    themeClass.classList.remove('btn-dark')
    themeClass.classList.add('btn-light')
    anashei.style.backgroundColor = 'whitesmoke'
    anashei.style.border = '2px solid rgb(184, 184, 184)'
    if(localStorage.getItem('dark-mode')==='true'){
        localStorage.removeItem('dark-mode')
        anashei.style.backgroundColor = 'whitesmoke'
        anashei.style.border = '2px solid rgb(184, 184, 184)'
    }
})
themeSwitchTo2.addEventListener('click', ()=>{
    document.body.style.backgroundImage = 'linear-gradient(to top, black 0%, rgb(60, 60, 60)100%)'
    document.body.classList.add('dark')
    document.body.classList.remove('light')
    navClass.classList.add('bg-dark')
    navClass.classList.remove('bg-secondary')
    navClass.classList.add('navbar-dark')
    navClass.classList.remove('navbar-light')
    themeClass.classList.add('btn-dark')
    themeClass.classList.remove('btn-light')
    anashei.style.backgroundColor = '#353535'
    anashei.style.border = '2px solid grey'
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true')
        anashei.style.backgroundColor = '#353535'
        anashei.style.border = '2px solid grey'
    }
})
if(localStorage.getItem('dark-mode')==='true')
{
    document.body.style.backgroundImage = 'linear-gradient(to top, black 0%, rgb(60, 60, 60)100%)'
    document.body.classList.add('dark')
    document.body.classList.remove('light')
    navClass.classList.add('bg-dark')
    navClass.classList.remove('bg-secondary')
    navClass.classList.add('navbar-dark')
    navClass.classList.remove('navbar-light')
    themeClass.classList.add('btn-dark')
    themeClass.classList.remove('btn-light')
}

// inspect
const anashei = document.getElementById('anashei')
const preAnashei = document.getElementById('preAnashei')
const cruz = document.getElementById('cruz')
anashei.style.display = 'none'
preAnashei.style.display = 'none' 

cruz.addEventListener('click', ()=>{
    anashei.style.display = 'none'
    preAnashei.style.display = 'none'
    bodyenso.style.overflow = 'auto'
})
preAnashei.addEventListener('click', ()=>{
    anashei.style.display = 'none'
    preAnashei.style.display = 'none'
    bodyenso.style.overflow = 'auto'
})    
document.addEventListener('keydown', (event) => {
    const key = event.key
    if(key == 'Escape'){
        anashei.style.display = 'none'
        preAnashei.style.display = 'none'
        bodyenso.style.overflow = 'auto'
    }
    
})

// carritu

// hover

//asnashe
let web3
async function connect(){
    await window.web3.currentProvider.enable()
    web3 = new web3(window.web3.currentProvider)
}

const app = document.getElementById('app')
const nfts = [{
    "title": "Insanity",
    "image": "/imgs/nft 1.png",
    "description": "Time travelling selfDrived virtual bot.",
    "price": "$75",
}]
nfts.forEach(nfts =>{
    app.innerHTML += `<li>${nfts.title} - ${nfts.price} - ${nfts.description} - ${nfts.image}</li>`
})