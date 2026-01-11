function verificar(){
const precoAnterior = parseFloat(prompt("Digite o Preço Anterior"))
const precoAtual = parseFloat(prompt("Digite o preço Atual"))
const diferenca = precoAtual - precoAnterior
const percentualVariacao = (diferenca / precoAnterior) * 100
const percentualRelativo = ((precoAnterior / precoAtual)-1) *100
const res = document.querySelector("#resultado")

if(isNaN(precoAnterior) || isNaN(precoAtual) ){
   
res.innerHTML =` <p>Digite somente Numeros Validos</p>`
return
}

if(diferenca > 0){
   res.innerHTML =`<p>O produto ficou mais Caro!</p>
   <p>O produto Custava R$ ${precoAnterior.toFixed(2)} e Agora custa R$ ${precoAtual.toFixed(2)}.</p>
   <p> O preço subiu R$ ${diferenca.toFixed(2)} em relacao ao preco anterior.</p>
   <p>Uma variacao de ${Math.abs(percentualVariacao).toFixed(2)}% para cima.</p>
   <p>Ou seja ,o preco antigo era ${Math.abs(percentualRelativo).toFixed(2)}% menor em relacao ao preço atual.</p>
   `
 } else if (diferenca < 0) {
   res.innerHTML = `<p>O produto ficou mais barato!</p>
   <p>O produto Custava R$ ${precoAnterior.toFixed(2)} e Agora custa R$ ${precoAtual.toFixed(2)}.</p>
   <p> O preço caiu R$ ${Math.abs(diferenca).toFixed(2)} em relacao ao preco anterior.</p>
   <p>Uma variacao de ${Math.abs(percentualVariacao).toFixed(2)} % para baixo.</p> 
   <p>Ou seja, o preco antigo era ${Math.abs(percentualRelativo).toFixed(2)}% maior em relacão ao preco atual.</p>
   `
} else{
   res.innerHTML = ` <p>O preco Nao Mudou</p>`

}
         
   }



function limpar(){
  document.querySelector("#resultado").innerHTML =""

}