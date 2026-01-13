let res = document.querySelector("#resultado")
let computador = 0
let jogador = 0

function sortear(){
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
     computador = min + Math.trunc(dif * aleatorio) //(ou o Math.floor)
}
    function jogar(){
        jogador = Number(prompt("Digite seu palpite (numeros de 1 a 100)"))
        if(jogador < computador){
            res.innerHTML+=`<p>Jogador digitou o numero:  <strong style="color:black;">${jogador}</strong></p> <p>Computador escolheu um numero <strong style="color:black;">Maior</strong></p><hr>`
        }else if(jogador > computador){
                res.innerHTML+=`<p>Jogador digitou o numero:<strong style="color:black;">${jogador}</strong></p> <p>Computador escolheu um numero <strong style="color:black">Menor</strong></p><hr>`
            }else if(jogador == computador){
                    res.innerHTML+=`<p><strong >Parabens!</strong > <strong style="color:green;">você acertou!</strong>. o computador escolheu o numero: <strong style="color:black">${computador}</strong>.</p>`
                }
                
            
        }
    

    
   



function limpar(){
    let res = document.querySelector("#resultado")
    res.innerHTML="<p><strong>Escolha um numero entre 1 e 100</strong></p>"
    //document.querySelector("#botao").style.visibility ='hidden' 
    //document.querySelector("#botaoLimpar").style.visibility ='hidden' 

}





