let res = document.querySelector("#resultado")
function clicarBotao(){
     let agora = new Date
     res.innerHTML= `<p>O que eu recebi do sistema foi <mark> ${agora}</mark></p>`

}

function limpar(){
    res.innerHTML= "<p>O Resultado da ação sairá aqui!</p>"
}
