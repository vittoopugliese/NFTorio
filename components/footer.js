// footer
const footer = document.getElementById('innerFooter');

// random index generator !
const nftorio = document.querySelectorAll('#isologotipo')[1]

nftorio.addEventListener('mouseover', (e) => {
  e.preventDefault()
  setInterval(()=>{
    let randomNumber = Math.floor(Math.random() * 101);
  
    nftorio.style.filter = `invert(${randomNumber+10}%) sepia(${randomNumber-10}%) saturate(${randomNumber*(randomNumber *250)}%) hue-rotate(${randomNumber * (randomNumber/5)}deg) brightness(100%) contrast(200%)`
  },1000)
})
