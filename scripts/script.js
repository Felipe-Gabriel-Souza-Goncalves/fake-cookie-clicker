let cookies = 0;
let cookiesPS;
var upgrade1 = {
    melhoria: 0,
    preco: 5,
}
var upgrade2 = {
    melhoria: 0,
    preco: 25,
}
var upgrade3 = {
    melhoria: 0,
    preco: 240,
    porSegundo:5
}

pegarLocalStorage()
setInterval(salvarTemporario, 60000)
setInterval(cookiesPorSeg, 1000)

document.getElementById('cookie').onclick = function click(){
    cookies += 1 +(upgrade1.melhoria*1) + (upgrade2.melhoria*5)
    document.getElementById('contador').innerHTML = cookies + " Cookies"

}
function cookiesPorSeg(){
    cookiesPS = (upgrade3.melhoria*upgrade3.porSegundo)
    cookies +=cookiesPS
    if(cookies != 0){
        document.getElementById('contador').innerHTML = cookies + " Cookies"
        document.getElementById('cookies/s').innerHTML = cookiesPS + " Cookies por segundo"
    }
} 


function compraMelhoria(obj1, qntUpgrade, precoUpgrade){
    if(cookies >=obj1.preco){
        obj1.melhoria +=1
        cookies-= obj1.preco
        obj1.preco += Math.floor(obj1.preco*0.08+1)
        console.log(obj1.preco)
        document.getElementById('contador').innerHTML = cookies + " Cookies"
        document.getElementById(qntUpgrade).innerHTML = obj1.melhoria
        document.getElementById(precoUpgrade).innerHTML = obj1.preco + " cookies"
    }
}

function salvarTemporario(){
    localStorage.setItem("bancoCookie", cookies)
    localStorage.setItem("cookiePorSegundo", cookiesPS)
    localStorage.setItem("upgrade1QNTD", upgrade1.melhoria)
    localStorage.setItem("upgrade2QNTD", upgrade2.melhoria)
    localStorage.setItem("upgrade3QNTD", upgrade3.melhoria)
}

function pegarLocalStorage(){
    if(localStorage.getItem("bancoCookie") != null){
        cookies = parseInt(localStorage.getItem("bancoCookie"))
    }
    if(localStorage.getItem("upgrade1QNTD") != null){
        upgrade1.melhoria = parseInt(localStorage.getItem("upgrade1QNTD"))
    }
    if(localStorage.getItem("upgrade2QNTD") != null){
        upgrade2.melhoria = parseInt(localStorage.getItem("upgrade2QNTD"))
    }
    if(localStorage.getItem("upgrade3QNTD") != null){
        upgrade3.melhoria = parseInt(localStorage.getItem("upgrade3QNTD"))
    }
    compraMelhoria(upgrade1, 'qntUp1', 'precoUp1')
    compraMelhoria(upgrade2, 'qntUp2', 'precoUp2')
    compraMelhoria(upgrade3, 'qntUp3', 'precoUp3')
    cookiesPorSeg()
}


