class Conquistas{

    static numeroConquistasTotais = 0
    static conquistasTotais = []
    static numeroConquistasLiberadas = 0
    static conquistasLiberadas = []

    constructor(nome, descricao, variavel, criterio, categoria){
        this.nome = nome,
        this.descricao = descricao
        this.variavel = variavel, 
        this.criterio = criterio,
        this.categoria = categoria
        this.completa = false

        Conquistas.numeroConquistasTotais++   
        Conquistas.conquistasTotais.push(this)
    }
}

const infoConquistas = {
    c1: new Conquistas("Começando!", "Fez ao menos 100 cookies no total", cookies, "cookieTotal >= 100", "bronze"),
    c2: new Conquistas("Um pouco mais", "Fez ao menos 1.000 cookies no total", cookies, "cookieTotal >= 1000", "bronze"),
    c3: new Conquistas("Aberto para todos!", "Fez ao menos 10.000 cookies no total!", cookies, "cookieTotal >= 10000", "prata"),
    c4: new Conquistas("Melhor do mundo!", "Fez ao menos 100.000 cookies no total!!!", cookies, "cookieTotal >= 100000", "ouro"),
    c4: new Conquistas("Monopólio", "Fez ao menos 1.000.000 cookies no total!!!", cookies, "cookieTotal >= 1000000", "ouro"),

    c5: new Conquistas("Olha! faz sozinho!", `Comprou 1 ${upgrade1.nome}`, upgrade1.quantidade, "upgrade1.quantidade >= 1", "bronze"),
    c6: new Conquistas("Automático", `Comprou 10 ${upgrade1.nome}`, upgrade1.quantidade, "upgrade1.quantidade >= 25", "bronze"),
    c7: new Conquistas("Nada mal", `Comprou 50 ${upgrade1.nome}`, upgrade1.quantidade, "upgrade1.quantidade >= 50", "prata"),
    c8: new Conquistas("Definitivamente algo", `Comprou 100 ${upgrade1.nome}`, upgrade1.quantidade, "upgrade1.quantidade >= 100", "ouro"),

    c9: new Conquistas("5x melhor!", `Comprou 1 ${upgrade2.nome}`, upgrade2.quantidade, "upgrade2.quantidade >= 1", "bronze"),
    c10: new Conquistas("Ótimo custo benefício", `Comprou 10 ${upgrade2.nome}`, upgrade2.quantidade, "upgrade2.quantidade >= 25", "bronze"),
    c11: new Conquistas("Uma fábrica de cookies", `Comprou 50 ${upgrade2.nome}`, upgrade2.quantidade, "upgrade2.quantidade >= 50", "prata"),
    c12: new Conquistas("Wow. cookies.", `Comprou 100 ${upgrade2.nome}`, upgrade2.quantidade, "upgrade2.quantidade >= 100", "ouro"),

    c13: new Conquistas("Que forno grande", `Comprou 1 ${upgrade3.nome}`, upgrade3.quantidade, "upgrade3.quantidade >= 1", "bronze"),
    c14: new Conquistas("100 cookies/seg só aqui!", `Comprou 10 ${upgrade3.nome}`, upgrade3.quantidade, "upgrade3.quantidade >= 25", "bronze"),
    c15: new Conquistas("Para que tanto?", `Comprou 50 ${upgrade3.nome}`, upgrade3.quantidade, "upgrade3.quantidade >= 50", "prata"),
    c16: new Conquistas("Milênio de cookies!", `Comprou 100 ${upgrade3.nome}`, upgrade3.quantidade, "upgrade3.quantidade >= 100", "ouro"),

}

function carregarConquistas(){
    const campoConquistas = document.querySelector("#campoConquistas")

    Conquistas.conquistasTotais.forEach(conq =>{
        const container = document.createElement("div")
        container.classList.add("containerConquistas")
        conq.feito ? "" : container.classList.add("conquistaBloqueada")
        container.innerHTML = `
            <img style="width: 60px" src="imagens/trofeu ${conq.categoria}.png">
            <div >
                <h5>${conq.nome}</h5>
                <!-- <span>${conq.descricao}</span> !>
            </div>
        `

        campoConquistas.appendChild(container)
    })
}

//BETA!
function verificarConquistas(){
    Conquistas.conquistasTotais.forEach((conq, i) =>{
        try {
            if(!conq.feito && eval(conq.criterio)){
                document.querySelectorAll(".containerConquistas")[i].classList.remove("conquistaBloqueada")
                conq.feito = true
                Conquistas.numeroConquistasLiberadas++
            }
        } catch (error) {
            console.log("Erro na conquista", conq, ", ERRO:", error)
        }
    })

    document.getElementById("numeroConquistas").innerHTML = 
        Conquistas.numeroConquistasLiberadas + "/" + Conquistas.numeroConquistasTotais
}

verificarConquistas()
setInterval(verificarConquistas, 5000)

carregarConquistas()