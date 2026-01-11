document.querySelector("#btnConverte").addEventListener("click",function(){

let cotacaoAtual = parseFloat(prompt("Digite a cotacao atual do dolar"))
let carteira = parseFloat (prompt("digite o valor em carteira"))
let res = document.getElementById("resultado")

if(!isNaN(cotacaoAtual) && !isNaN(carteira)){
    let convertido = carteira/cotacaoAtual
    res.textContent ="Voce tem $ "  + convertido.toFixed(2)  + " dolares"
}else{
    res.textContent ="Por favor,insira valores validos!"
}


})
              