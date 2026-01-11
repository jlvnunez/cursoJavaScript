
function bissexto(ano){
   return(ano % 4 === 0 && ano % 100 !== 0) ||(ano % 400 === 0)
}
function verifica(){
let entrada = prompt("Digite o ano a ser verificado")
let res = document.querySelector("#resultado")

 // Validação: campo vazio ou não numérico
      if (entrada === null || entrada.trim() === "" || isNaN(entrada)) {
        res.innerHTML = "⚠️ Por favor, insira um ano válido!"
        return
      }
      let ano = parseInt(entrada);


if(bissexto(ano)) {
   res.innerHTML =`Analisando o ano de ${ano}...<br>O ano de ${ano}<strong> E BISSEXTO ✅</strong>`
   
} else{
   res.innerHTML =`Analisando o ano ${ano}...<br>O ano de ${ano} <strong> NAO E BISSEXTO ❌</strong> `
}


}

function limpar(){
  document.querySelector("#resultado").innerHTML =""

}