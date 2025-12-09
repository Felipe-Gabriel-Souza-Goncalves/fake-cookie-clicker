var cookies = 0;
var cookiesPS = 0;
var cookieTotal = 0;
let cliques = 0;
let poderClique = 1;
let upgradesParaComprar = 1;
let SFXligado = true;
// classe para upgrades
class Upgrades {
  static numeroDeUpgrades = 0;
  static upgradesExistentes = [];

  // Contar todos os upgrades criados quando o programa for rodade
  // USO EM PROGRESSO!!
  static contarUpgrades(params) {
    this.numeroDeUpgrades = params.length;
    console.log(Upgrades.upgradesExistentes);
  }

  // construtor de upgrades
  constructor(nome, preco, quantidade, taxaPreco, cps, cpc) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    this.taxaPreco = taxaPreco;
    this.cps = cps;
    this.cpc = cpc;

    Upgrades.upgradesExistentes.push(this);
  }

  // função para comprar upgrade passando id de 2 elementos HTML referente a quantidade/preco do upgrade

  comprarUpgrade(idQntd, idPreco) {
    for (let i = 0; i < qntdUpgradeComprar; i++) {
      if (cookies >= this.preco) {
        cookies -= this.preco;
        this.preco = Math.floor(this.preco * this.taxaPreco);
        this.quantidade++;

        poderClique = 1;
        cookiesPS = 0;

        arrayUpgrades.forEach((element) => {
          poderClique += element.cpc * element.quantidade;
          cookiesPS += element.cps * element.quantidade;
        });

        this.conquistasQntd();
      } else {
        break;
      }

      document.getElementById("contador").innerHTML = cookies + " Cookies";

      // mudar o html dos elementos passados no parametro
      document.getElementById(idQntd).innerHTML = this.quantidade;
      document.getElementById(idPreco).innerHTML = this.preco + " cookies";
    }
  }

  // função para conquistas padrões de cada upgrade
  // TESTE E IMPLEMENTAÇÃO EM PROGRESSO!
  conquistasQntd() {
    if (this.conquista == 0 && this.quantidade > 9) {
      this.conquista = 1;
      console.log("%c Conquista desbloqueada!", "background-color: red;", `\n você comprou 10 ${this.nome}`);
    }
    if (this.conquista == 1 && this.quantidade > 49) {
      this.conquista = 2;
      console.log(`Conquista desbloqueada! \n você comprou 50 ${this.nome}!`);
    }
    if (this.conquista == 2 && this.quantidade > 99) {
      this.conquista = 3;
      console.log(`Conquista desbloqueada! \n você comprou 100 ${this.nome}!!!!!`);
    }
    if (this.conquista == 3 && this.quantidade > 199) {
      this.conquista = 4;
      console.log(`Conquista desbloqueada! \n você comprou 200 ${this.nome}!!!!!! 😎`);
    }
  }
}

// nome, preco, quantidade, taxa (>1), cps (cookie por segundo), cpc (cookie por clique)
const upgrade1 = new Upgrades("+1 Cookie", 5, 0, 1.2, 1, 0);
const upgrade2 = new Upgrades("+5 Cookie/seg", 25, 0, 1.4, 5, 0);
const upgrade3 = new Upgrades("+10 Cookie/seg", 200, 0, 1.06, 10, 0);
const upgrade4 = new Upgrades("+1 Cookie/click", 1200, 0, 1.06, 0, 1);

// array com todos os upgrades
var arrayUpgrades = [upgrade1, upgrade2, upgrade3];

function audioCookie() {
  if (SFXligado == true) {
    document.getElementById("toggleSFX").innerHTML = "Desligar efeitos sonoros";
    let sonsCookie = ["sfx/pop-1.mp3", "sfx/pop-2.mp3", "sfx/pop-3.mp3"];
    let index = Math.floor(Math.random() * 3);
    var audio = new Audio(sonsCookie[index]);
    audio.volume = document.getElementById("volumeSFX").value;
    audio.play();
  } else {
    document.getElementById("toggleSFX").innerHTML = "Ligar efeitos sonoros";
  }
}

function clicarNoCookie() {
  audioCookie();
  cookies += poderClique + 1;
  document.getElementById("contador").innerHTML = cookies + " Cookies";
  cliques += 1;
  cookieTotal += poderClique;
}

// Função de adicionar cookies por segundo ao banco de cookies
function cookiesPorSeg() {
  cookies += cookiesPS;
  cookieTotal += cookiesPS;
  // if(cookies != 0){
  document.getElementById("contador").innerHTML = cookies + " Cookies";
  document.getElementById("cookies/s").innerHTML = cookiesPS + " Cookies por segundo";
  // }
}

// a cada 30 segundos, jogar essas informações no localStorage
function salvarTemporario() {
  document.querySelector("#popUpSalvar").style.display = "block";
  setTimeout(() => (document.querySelector("#popUpSalvar").style.display = "none"), 2000);

  localStorage.setItem("bancoCookie", cookies);
  localStorage.setItem("cookieTotal", cookieTotal);
  localStorage.setItem("cookiePorSegundo", cookiesPS);

  const quantidadesUpgrades = Array.from(Upgrades.upgradesExistentes).map((up) => up.quantidade);
  localStorage.setItem("quantidadesUpgrades", quantidadesUpgrades);
}

function apagarProgresso() {
  Swal.fire({
    title: "Você tem certeza de que quer apagar o progresso?",
    showDenyButton: true,
    confirmButtonText: "Apagar",
    denyButtonText: `Cancelar`,
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.setItem("bancoCookie", 0);
      localStorage.setItem("cookieTotal", 0);
      localStorage.setItem("cookiePorSegundo", 0);
      localStorage.setItem("upgrade1QNTD", 0);
      localStorage.setItem("upgrade2QNTD", 0);
      localStorage.setItem("upgrade3QNTD", 0);
      window.location.href = "index.html";
    } else if (result.isDenied) {
      return;
    }
  });
}

function carregarTabela() {
  const tabelaProdutos = document.querySelector("#listaProdutos");
  tabelaProdutos.innerHTML = "";

  Upgrades.upgradesExistentes.forEach((upgrade, i) => {
    const index = i + 1;
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td class="nomeUpgrade">
                <button 
                    class="botaoCompraUpgrade" 
                    onclick="upgrade${index}.comprarUpgrade('qntUp${index}', 'precoUp${index}')">${upgrade.nome}
                </button>
            </td>
            <td class="qntUp" id="qntUp${index}">${upgrade.quantidade}</td>
            <td class="precoCompra"><h2 id="precoUp${index}">${upgrade.preco} cookies</h2></td>
        `;

    tabelaProdutos.appendChild(tr);
  });
}

// Roda assim que reiniciar a página, pega as informações d localStorage
function pegarLocalStorage() {
  if (localStorage.getItem("bancoCookie") != null) {
    cookies = parseInt(localStorage.getItem("bancoCookie"));
    cookieTotal = parseInt(localStorage.getItem("cookieTotal"));
  }

  if (localStorage.getItem("quantidadesUpgrades")) {
    const arrayQuantidades = localStorage
      .getItem("quantidadesUpgrades")
      .split(",")
      .map((e) => Number(e));

    Upgrades.upgradesExistentes.forEach((_, i) => {
      const upgrade = Upgrades.upgradesExistentes[i];
      upgrade.quantidade = arrayQuantidades[i];

      for (let j = 0; j < upgrade.quantidade; j++) {
        upgrade.preco = Math.floor(upgrade.preco * upgrade.taxaPreco);
      }
    });
  }

  //   // para cada upgrade no arrayUpgrade...
  //   for (let i = 1; i <= arrayUpgrades.length; i++) {
  //     // se a quantidade do upgrade (localStorage) não for nula...
  //     if (localStorage.getItem(`upgrade${i}QNTD`) != null) {
  //       // pegue a quantidade do localStorage e joque pra upgrade
  //       arrayUpgrades[i - 1].quantidade = parseInt(localStorage.getItem(`upgrade${i}QNTD`));

  //       // ajustar o preço do upgrade após reiniciar a página
  //       for (let j = 1; j <= arrayUpgrades[i - 1].quantidade; j++) {
  //         arrayUpgrades[i - 1].preco = Math.floor(arrayUpgrades[i - 1].preco * arrayUpgrades[i - 1].taxaPreco);
  //       }

  //       // muda o html para corresponder a quantidade/preco
  //       document.getElementById(`qntUp${i}`).innerHTML = arrayUpgrades[i - 1].quantidade;
  //       document.getElementById(`precoUp${i}`).innerHTML = arrayUpgrades[i - 1].preco + " cookies";
  //     }
  //   }
  // limpar variáveis para uso (funcional, masnão prático)
  poderClique = 0;
  cookiesPS = 0;

  // para cada elemento do arrayUpgrades..
  arrayUpgrades.forEach((element) => {
    poderClique += element.cpc * element.quantidade;
    cookiesPS += element.cps * element.quantidade;
  });
  cookiesPorSeg();
}

carregarTabela();
pegarLocalStorage();
Upgrades.contarUpgrades(arrayUpgrades);

document.addEventListener("keypress", () => {
  clicarNoCookie();
});

setInterval(salvarTemporario, 30000);
setInterval(cookiesPorSeg, 1000);
