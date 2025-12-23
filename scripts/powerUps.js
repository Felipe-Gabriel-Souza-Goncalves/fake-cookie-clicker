// EM PROGRESSO

class Powerup {
  static ordemPowerups = []
  static numComprados = 0
  
  constructor(nome, preco, efeito, cumulativo) {
    this.nome = nome
    this.preco = preco
    this.efeito = efeito
    this.cumulativo = cumulativo

    Powerup.ordemPowerups.push(this)
  }

  comprarPowerup(){
    
  }

  static comprado(index){
    if(!index) return
    if(index > this.ordemPowerups.length) return

    this.ordemPowerups.splice(index, 1)
    this.numComprados++
  }
}