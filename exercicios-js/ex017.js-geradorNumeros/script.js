function gerar(){
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    let numero = min + Math.trunc(dif * aleatorio) //(ou o Math.floor)

    let res = document.querySelector("#resultado")
    res.innerHTML+=`<p>Acabei de gerar o número <mark>${numero}</mark></p>`

}

function limpar(){
    let res = document.querySelector("#resultado")
    res.innerHTML="<p><strong>Cada vez que apertar o botão acima, vai gerar um numero entre 1 e 100</strong></p>"
}





