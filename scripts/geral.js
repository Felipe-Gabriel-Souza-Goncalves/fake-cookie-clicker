function abrirSecao(idSecao, idsSecoesAuxiliares = null, callback = null){
  document.getElementById("divConfiguracoes").style.display = "none"
  document.getElementById("divEstatisticas").style.display = "none"
  document.getElementById("divConquistas").style.display = "none"

  idSecao != null ? document.getElementById(idSecao).style.display = "unset" : ""
  
  if(idsSecoesAuxiliares){
    Array.from(idsSecoesAuxiliares).forEach(id =>{
      document.getElementById(id).style.display = "inherit"
    })
  }
}
