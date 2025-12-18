function decoracao(obj, idPreco) {
  document.getElementById(idPreco).title = obj.preco + ` cookies necessários para comprar`;
  if (obj.preco > cookies) {
    document.getElementById(idPreco).style.backgroundColor = "gray";
    document.getElementById(idPreco).style.color = "lightgray";
    document.getElementById(idPreco).style.opacity = "1";
  } else {
    document.getElementById(idPreco).style.backgroundColor = "transparent";
    document.getElementById(idPreco).style.color = "black";
    document.getElementById(idPreco).style.opacity = "1";
  }
}

function estatisticas() {
  document.getElementById("estatCookies").innerHTML = cookies;
  document.getElementById("estatCookiesTotal").innerHTML = cookieTotal;
  document.getElementById("estatCookiesPorClique").innerHTML = poderClique;
  document.getElementById("estatCookiesPorSegundo").innerHTML = valorSelectCPS();
  document.getElementById("estatCliquesTotais").innerHTML = cliques;
  document.getElementById("estatUpgradesComprados").innerHTML = Upgrades.numeroDeUpgrades;
}

function valorSelectCPS() {
  const index = document.getElementById("selectCookiesPorSegundo").value;
  let total = 0;

  if (index == "total") {
    Upgrades.upgradesExistentes
      .filter((upgd) => upgd.cps > 0)
      .forEach((upgd, i) => {
        total += upgd.quantidade * upgd.cps;
      });
  } else {
    const upgd = Upgrades.upgradesExistentes[index];
    total = upgd.quantidade * upgd.cps;
  }

  return total;
}

var qntdUpgradeComprar = 1;

function mudarNumUpgrades(id) {
  switch (id) {
    case 0:
      qntdUpgradeComprar = 1;
      break;
    case 1:
      qntdUpgradeComprar = 10;
      break;
    case 2:
      qntdUpgradeComprar = 100;
      break;
  }

  for (let i = 0; i < document.getElementsByClassName("botaoMudarNumUpgrade").length; i++) {
    document.getElementsByClassName("botaoMudarNumUpgrade")[i].classList.remove("botaoAtivo");

    if (i == id) {
      document.getElementsByClassName("botaoMudarNumUpgrade")[i].classList.add("botaoAtivo");
    }
  }

  alterarTextosPrecos()
}

function alterarTextosPrecos() {
  Upgrades.upgradesExistentes.forEach((upgd, i) => {
    let tempPreco = structuredClone(upgd.preco)
    // console.log("preco temporario", tempPreco)
    for (let j = 0; j < qntdUpgradeComprar; j++) {
        tempPreco = Math.floor(tempPreco * upgd.taxaPreco);
    }

    document.getElementById("precoUp"+parseInt(i+1)).innerText = tempPreco + " cookies"
  });
}
