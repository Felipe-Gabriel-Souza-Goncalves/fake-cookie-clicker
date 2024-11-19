
function decoracao(obj, idPreco){
    // console.log("upgrade" + "1" + ".melhoria")
    document.getElementById(idPreco).title = "??? "+ obj.preco+ ` necessários para comprar`
    if(obj.preco > cookies){
        document.getElementById(idPreco).style.backgroundColor = 'gray'
        document.getElementById(idPreco).style.color = 'lightgray'
        document.getElementById(idPreco).style.opacity = '1'
    } else {
        document.getElementById(idPreco).style.backgroundColor = 'transparent'
        document.getElementById(idPreco).style.color = 'black'
        document.getElementById(idPreco).style.opacity = '1'
    }
}
setInterval(() => decoracao(upgrade1, 'precoUp1'), 200)
setInterval(() => decoracao(upgrade2, 'precoUp2'), 200)
setInterval(() => decoracao(upgrade3, 'precoUp3'), 200)

function estatisticas(){
    document.getElementById("estatisticasCookies").innerHTML = cookies
    document.getElementById("estatisticasCookiesTotal").innerHTML = cookieTotal
    document.getElementById("estatisticasCookiesPorClique").innerHTML = poderClique
    document.getElementById("estatisticasCookiesPorSegundo").innerHTML = upgrade3.cps * upgrade3.quantidade
    document.getElementById("estatisticasCliquesTotais").innerHTML = cliques
    document.getElementById("estatisticasUpgradesComprados").innerHTML = parseInt(upgrade1.quantidade + upgrade2.quantidade + upgrade3.quantidade)
}

var qntdUpgradeComprar = 1

function mudarNumUpgrades(id){
    switch(id){
        case 0:
            qntdUpgradeComprar = 1
            break
        case 1: 
            qntdUpgradeComprar = 10
            break
        case 2:
            qntdUpgradeComprar = 100 
            break
    }

    for(let i = 0; i< document.getElementsByClassName("botaoMudarNumUpgrade").length; i++){
        document.getElementsByClassName("botaoMudarNumUpgrade")[i].classList.remove("botaoAtivo")

        if(i == id){
            document.getElementsByClassName("botaoMudarNumUpgrade")[i].classList.add("botaoAtivo")
        }
    }
}


setInterval(estatisticas, 1500)