const title = document.getElementById('NFTTitle')
const photo = document.getElementById('NFTphoto')
const description = document.getElementById('nftDescription')
const price = document.getElementById('nftPrice')
const bircoin = document.getElementById('bitcoinPay2')
const bircoinBtn = document.getElementById('bitcoinPay')

// 75 = ac86e95dc73b428b
// 50 = ba85a9c10ca543fa
// 25 = 90a7647d7ea5403a

function nft1(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image1')
    title.innerHTML = data[0].nftTitle1
    description.innerHTML = data[0].nftDescription1
    price.innerHTML = data[0].nftPrice1
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=7f3354cb3a3d47c7>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
    
})}

function nft2(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image2')
    title.innerHTML = data[0].nftTitle2
    description.innerHTML = data[0].nftDescription2
    price.innerHTML = data[0].nftPrice2
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=cc43bbe48eda480a>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}

function nft3(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image3')
    title.innerHTML = data[0].nftTitle3
    description.innerHTML = data[0].nftDescription3
    price.innerHTML = data[0].nftPrice3
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=4e6592c887bb4d9a>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft4(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image4')
    title.innerHTML = data[0].nftTitle4
    description.innerHTML = data[0].nftDescription4
    price.innerHTML = data[0].nftPrice4
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=c89b01122fb846a1>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft5(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image5')
    title.innerHTML = data[0].nftTitle5
    description.innerHTML = data[0].nftDescription5
    price.innerHTML = data[0].nftPrice5
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=d895fbbfe7124f2c>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft6(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image6')
    title.innerHTML = data[0].nftTitle6
    description.innerHTML = data[0].nftDescription6
    price.innerHTML = data[0].nftPrice6
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=9a24859a4c0444cd>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft7(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image7')
    title.innerHTML = data[0].nftTitle7
    description.innerHTML = data[0].nftDescription7
    price.innerHTML = data[0].nftPrice7
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=12663705d2d44982>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft8(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image8')
    title.innerHTML = data[0].nftTitle8
    description.innerHTML = data[0].nftDescription8
    price.innerHTML = data[0].nftPrice8
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=5192056c92324347>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft9(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image9')
    title.innerHTML = data[0].nftTitle9
    description.innerHTML = data[0].nftDescription9
    price.innerHTML = data[0].nftPrice9
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=acdb3acec66844e1>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft10(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image10')
    title.innerHTML = data[0].nftTitle10
    description.innerHTML = data[0].nftDescription10
    price.innerHTML = data[0].nftPrice10
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=56b8dc28f3e64051>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft11(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image11')
    title.innerHTML = data[0].nftTitle11
    description.innerHTML = data[0].nftDescription11
    price.innerHTML = data[0].nftPrice11
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=c84519f4fcc34288>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft12(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image12')
    title.innerHTML = data[0].nftTitle12
    description.innerHTML = data[0].nftDescription12
    price.innerHTML = data[0].nftPrice12
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=ad12288f079d4c11>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft13(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image13')
    title.innerHTML = data[0].nftTitle13
    description.innerHTML = data[0].nftDescription13
    price.innerHTML = data[0].nftPrice13
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=88ed930bfe804df0>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft14(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image14')
    title.innerHTML = data[0].nftTitle14
    description.innerHTML = data[0].nftDescription14
    price.innerHTML = data[0].nftPrice14
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=bcf8bcff07344958>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft15(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image15')
    title.innerHTML = data[0].nftTitle15
    description.innerHTML = data[0].nftDescription15
    price.innerHTML = data[0].nftPrice15
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=9b8b5bd050ef4744>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft16(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image16')
    title.innerHTML = data[0].nftTitle16
    description.innerHTML = data[0].nftDescription16
    price.innerHTML = data[0].nftPrice16
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=38bea77dae6049e8>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft17(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image17')
    title.innerHTML = data[0].nftTitle17
    description.innerHTML = data[0].nftDescription17
    price.innerHTML = data[0].nftPrice17
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=7cf1b19d127c4441>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft18(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image18')
    title.innerHTML = data[0].nftTitle18
    description.innerHTML = data[0].nftDescription18
    price.innerHTML = data[0].nftPrice18
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=74eb945e6f5f48ac>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft19(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image19')
    title.innerHTML = data[0].nftTitle19
    description.innerHTML = data[0].nftDescription19
    price.innerHTML = data[0].nftPrice19
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=ff38c1b3a42949b2>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft20(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image20')
    title.innerHTML = data[0].nftTitle20
    description.innerHTML = data[0].nftDescription20
    price.innerHTML = data[0].nftPrice20
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=41e9c4063a224854>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft21(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image21')
    title.innerHTML = data[0].nftTitle21
    description.innerHTML = data[0].nftDescription21
    price.innerHTML = data[0].nftPrice21
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=caabea9c4ad74966>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft22(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image22')
    title.innerHTML = data[0].nftTitle22
    description.innerHTML = data[0].nftDescription22
    price.innerHTML = data[0].nftPrice22
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=14b41570fdf04a90>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>` 
})}
function nft23(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image23')
    title.innerHTML = data[0].nftTitle23
    description.innerHTML = data[0].nftDescription23
    price.innerHTML = data[0].nftPrice23
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=08a09eeba88b430f>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft24(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image24')
    title.innerHTML = data[0].nftTitle24
    description.innerHTML = data[0].nftDescription24
    price.innerHTML = data[0].nftPrice24
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=cf8ddd7f131b4155>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft25(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image25')
    title.innerHTML = data[0].nftTitle25
    description.innerHTML = data[0].nftDescription25
    price.innerHTML = data[0].nftPrice25
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=40ca6d423e2b40ff>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft26(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image26')
    title.innerHTML = data[0].nftTitle26
    description.innerHTML = data[0].nftDescription26
    price.innerHTML = data[0].nftPrice26
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=d873bf75e8bb4347>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>` 
})}
function nft27(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image27')
    title.innerHTML = data[0].nftTitle27
    description.innerHTML = data[0].nftDescription27
    price.innerHTML = data[0].nftPrice27
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=b552a0a6853d4d66>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft28(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image28')
    title.innerHTML = data[0].nftTitle28
    description.innerHTML = data[0].nftDescription28
    price.innerHTML = data[0].nftPrice28
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=269a90aadbf440b6>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft29(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image29')
    title.innerHTML = data[0].nftTitle29
    description.innerHTML = data[0].nftDescription29
    price.innerHTML = data[0].nftPrice29
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=0acef96486304dbe>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft30(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image30')
    title.innerHTML = data[0].nftTitle30
    description.innerHTML = data[0].nftDescription30
    price.innerHTML = data[0].nftPrice30
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=2bee479dd5514470>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft31(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image31')
    title.innerHTML = data[0].nftTitle31
    description.innerHTML = data[0].nftDescription31
    price.innerHTML = data[0].nftPrice31
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=b681c7b194c54f72>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft32(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image32')
    title.innerHTML = data[0].nftTitle32
    description.innerHTML = data[0].nftDescription32
    price.innerHTML = data[0].nftPrice32
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=c9d20f6ae1124163>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft33(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image33')
    title.innerHTML = data[0].nftTitle33
    description.innerHTML = data[0].nftDescription33
    price.innerHTML = data[0].nftPrice33
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=4bc30b973c2f4a85>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft34(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image34')
    title.innerHTML = data[0].nftTitle34
    description.innerHTML = data[0].nftDescription34
    price.innerHTML = data[0].nftPrice34
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=691a57e1886c4848>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}
function nft35(){
    anashei.style.display = 'grid'
    preAnashei.style.display = 'flex'
    bodyenso.style.overflow = 'hidden'
    fetch('values.json').then(response => response.json())
    .then(data =>{
    photo.className = ''
    photo.classList.add('image35')
    title.innerHTML = data[0].nftTitle35
    description.innerHTML = data[0].nftDescription35
    price.innerHTML = data[0].nftPrice35
    bircoinBtn.innerHTML = `
    <a class="blockoPayBtn" id="bitcoinPay2" data-toggle="modal" data-uid=1a26a8d0321a44b1>
    <button  type="button" class="btn btn-dark fs-4">Buy with Bitcoin</button>
    </a>`
})}