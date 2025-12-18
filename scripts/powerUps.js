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

  static comprado(index){
    if(!index) return
    if(index > this.ordemPowerups.length) return

    this.ordemPowerups.splice(index, 1)
    this.numComprados++
  }
}

// const powerups = {
//   p1: new Powerup("2x -> +1 cookies/seg", 150, "upgrade1.cps*2", true),
//   p2: new Powerup("2x ", 150, "upgrade1.cps*2", true),
//   p3: new Powerup("2x cookies", 150, "upgrade1.cps*2", true),
//   p4: new Powerup("2x cookies", 150, "upgrade1.cps*2", true),
//   p5: new Powerup("2x cookies", 150, "upgrade1.cps*2", true),
// }