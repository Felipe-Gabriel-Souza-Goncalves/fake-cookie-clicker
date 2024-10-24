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
setInterval(salvarTemporario, 2000)
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
        for(var i = 0; i<upgrade1.melhoria; i++){
            upgrade1.preco += Math.floor((upgrade1.preco*0.08+1))
            document.getElementById('qntUp1').innerHTML = upgrade1.melhoria
            document.getElementById('precoUp1').innerHTML = upgrade1.preco + " cookies"
        }

    }
    if(localStorage.getItem("upgrade2QNTD") != null){
        upgrade2.melhoria = parseInt(localStorage.getItem("upgrade2QNTD"))
        for(var i = 0; i<upgrade2.melhoria; i++){
            upgrade2.preco += Math.floor((upgrade2.preco*0.08+1))
            document.getElementById('qntUp2').innerHTML = upgrade2.melhoria
            document.getElementById('precoUp2').innerHTML = upgrade2.preco + " cookies"
        }

    }
    if(localStorage.getItem("upgrade3QNTD") != null){
        upgrade3.melhoria = parseInt(localStorage.getItem("upgrade3QNTD"))
        for(var i = 0; i<upgrade3.melhoria; i++){
            upgrade3.preco += Math.floor((upgrade3.preco*0.08+1))
            document.getElementById('qntUp3').innerHTML = upgrade3.melhoria
            document.getElementById('precoUp3').innerHTML = upgrade3.preco + " cookies"
        }

    }

    cookiesPorSeg()
}


