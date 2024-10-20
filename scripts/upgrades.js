var powerUps = [
    ['1','Duplo clique', '50', 'melhoria1', '2'],
    ['2','Sem demora', '200', 'melhoria3', '4'],
    ['3','De pouco em pouco', '700', 'melhoria1', '1.5'],
    ['4','Mais rápido!', '1500', 'melhoria3', '1.5']
]
// console.log(powerUps)

function compraPowerUp(idSlot, objUpgrade){
    var i=0

    switch(idSlot){
        case 'slot1':
            i = 0
            console.log("AE PORRA")
            break
        case 'slot2':
            i = 1
            break
        case 'slot3':
            i = 2
            break
    }


    if(cookies >= parseInt(powerUps[i][2])){

        cookies -= parseInt(powerUps[i][2])
        objUpgrade = objUpgrade*parseFloat(powerUps[i][4])

        console.log(powerUps)
        powerUps[i].splice(0)
        console.log(powerUps)

        // console.log(powerUps)
        // console.log(objUpgrade)
        // console.log(idSlot)

        displayPowerUps()

    }
}

function displayPowerUps(precoPowerUp){

    document.getElementById('slot1').innerHTML = powerUps[0][1]
    document.getElementById('slot2').innerHTML = powerUps[1][1]
    document.getElementById('slot3').innerHTML = powerUps[2][1]



    document.getElementById('slot1').title =  precoPowerUp + " cookies necessários para comprar"
    document.getElementById('slot2').title =  precoPowerUp + " cookies necessários para comprar"
    document.getElementById('slot3').title =  precoPowerUp + " cookies necessários para comprar"
}

displayPowerUps()









