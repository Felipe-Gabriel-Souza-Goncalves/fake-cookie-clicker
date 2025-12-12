carregarTabela();

// Salvar
// pegarLocalStorage();
carregarSelectCookies()


// Decorações
setInterval(estatisticas, 2500)

// Conquistas
carregarConquistas()
verificarConquistas()

setInterval(verificarConquistas, 5000)


// Script
setInterval(salvarTemporario, 30000);
setInterval(cookiesPorSeg, 1000);
cookiesPorSeg()
carregarTextosPrecos()
textoAudio()

document.getElementById("selectCookiesPorSegundo").addEventListener("change", () =>{
  document.getElementById("estatCookiesPorSegundo").innerHTML = valorSelectCPS()
});
