class DisposivoEletronico {
  constructor(nome) {
    this.nome = nome
    this.ligado = false
  }
  ligar() {
    if (this.ligado) {
      console.log(this.nome + 'já ligado')
      return
    }
    this.ligado = true
  }
  desligar() {
    if (!this.ligado) {
      console.log(this.nome + ' já desligado')
      return
    }
    this.ligado = false
  }
}

class Smartphone extends DisposivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome)
    this.cor = cor
    this.modelo = modelo
  }
}
class Tablet extends DisposivoEletronico {
  constructor(nome, temWifi) {
    super(nome)
    this.temWifi = temWifi
  }
}


const s1 = new Smartphone ('sansung', 'preto', 'galaxy')
//s1.ligar()
console.log (s1)

const t1 = new Tablet ('ipad',true)
t1 .ligar()
console.log(t1)