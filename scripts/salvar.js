// a cada 30 segundos, jogar essas informações no localStorage
function salvarTemporario() {
  document.querySelector("#popUpSalvar").style.display = "block";
  setTimeout(() => (document.querySelector("#popUpSalvar").style.display = "none"), 2000);

  const configuracoes = {
    geral: {
      cliques: cliques,
      numeroDeUpgrades: Upgrades.numeroDeUpgrades,
      SFXligado: SFXligado,
      volume: document.getElementById("volumeSFX").value,
    },
    cookies: {
      bancoCookie: cookies,
      cookieTotal: cookieTotal,
      cookiePS: cookiesPS,
    },
    conquistas: Conquistas.conquistasLiberadas,
    upgrades: Upgrades.upgradesExistentes
  }

  localStorage.setItem("CCconfig", JSON.stringify(configuracoes))
}

function carregarConfiguracoes(){
  if(localStorage.getItem("CCconfig") != null){
    const configuracoes = JSON.parse(localStorage.getItem("CCconfig"))

    // Configurações gerais
    cliques = configuracoes.geral.cliques
    Upgrades.numeroDeUpgrades = configuracoes.geral.numeroDeUpgrades
    SFXligado = configuracoes.geral.SFXligado
    document.getElementById("volumeSFX").value = configuracoes.geral.volume

    // Configurações sobre cookies
    cookies = configuracoes.cookies.bancoCookie
    cookieTotal = configuracoes.cookies.cookieTotal
    cookiesPS = configuracoes.cookies.cookiePS

    // Configurações das conquistas
    Conquistas.numeroConquistasLiberadas = configuracoes.conquistas.length
    const configConquistas = configuracoes.conquistas

    configConquistas.forEach(conq =>{
      conq.feito = true
    })
    

    // Configurações dos upgrades
    const configUpgrades = configuracoes.upgrades
    Upgrades.upgradesExistentes.forEach((upgd, i) =>{
      upgd.quantidade = configUpgrades[i].quantidade
      upgd.preco = configUpgrades[i].preco
    })
  }
}

function carregarTextosPrecos(){
  Upgrades.upgradesExistentes.forEach((upgd, i) =>{
    document.getElementById(`qntUp`+ (i+1)).innerText = upgd.quantidade 
    document.getElementById(`precoUp`+ (i+1)).innerText = upgd.preco + " cookies"
  })
}

carregarConfiguracoes()

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

  // limpar variáveis para uso (funcional, masnão prático)
  poderClique = 0;
  cookiesPS = 0;

  // para cada elemento do arrayUpgrades..
  Upgrades.upgradesExistentes.forEach((element) => {
    poderClique += element.cpc * element.quantidade;
    cookiesPS += element.cps * element.quantidade;
  });
  cookiesPorSeg();
}
