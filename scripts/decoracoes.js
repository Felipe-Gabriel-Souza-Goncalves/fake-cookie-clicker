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
