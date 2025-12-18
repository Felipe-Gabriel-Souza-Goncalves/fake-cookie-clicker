carregarTabela();

// Salvar
// pegarLocalStorage();
carregarSelectCookies()


// Decorações
setInterval(estatisticas, 2500)

// Conquistas
verificarConquistas()
verificarConquistasInuteis()
carregarConquistas()

setInterval(() =>{
  verificarConquistas();
  verificarConquistasInuteis();
}, 5000)

// Script
cookiesPorSeg()
carregarTextosPrecos()
textoAudio()

setInterval(salvarTemporario, 30000);
setInterval(cookiesPorSeg, 1000);


document.getElementById("selectCookiesPorSegundo").addEventListener("change", () =>{
  document.getElementById("estatCookiesPorSegundo").innerHTML = valorSelectCPS()
});
