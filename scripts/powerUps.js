// EM PROGRESSO

class Powerup {
  static ordemPowerups = []
  static powerupsComprados = []
  static numComprados = 0
  
  constructor(nome, descricao, preco, efeito, cumulativo) {
    this.nome = nome
    this.descricao = descricao
    this.preco = preco
    this.efeito = efeito
    this.cumulativo = cumulativo
    this.comprado = false
    this.index = Powerup.ordemPowerups.length

    Powerup.ordemPowerups.push(this)
    
  }

  comprarPowerup(){
    if(cookies > this.preco){
      this.comprado(this.index)
    }
  }

  static comprado(index){
    if(!index) return
    if(index > this.ordemPowerups.length) return

    this.numComprados++
    this.atualizarFront()


  }

  static atualizarFront(){
    const filaPowerups = document.getElementById("divPowerups")

    for(let i = 0; i < 3; i++){
      const indexPowerup = i+Powerup.numComprados
      const powerup = Powerup.ordemPowerups[indexPowerup]

      if(indexPowerup >= Powerup.ordemPowerups.length){
        filaPowerups.innerHTML += `<div class="itemPowerup"></div>`
        continue
      }

      filaPowerups.innerHTML += `
        <div class= "itemPowerup" 
          onclick="${powerup.comprarPowerup()}"
          onmouseenter="${console.log("teste - entrou powerup")}"  
          onmouseleave="${console.log("teste - saiu powerup")}"  
        >
          ${powerup.nome}
        </div>
      `
    }
  }
}

const infoPowerups = {
  pw1: new Powerup("Cliques também", `+1 cpc para cada ${upgrade1.nome}`, 500, `upgrade1.cpc += 1`)
}