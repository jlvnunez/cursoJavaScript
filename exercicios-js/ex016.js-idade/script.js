function analisar(){

    let agora = new Date
    let ano = agora.getFullYear()
    let nascimento = Number(prompt("Digite sua data de Nascimento"))
    let idade = ano -nascimento
    let res = document.querySelector("#resultado")
    res.innerHTML=`<p><strong>Quem Nasceu em ${nascimento}, vai completar ${idade}anos de idade em 2026</strong></p>`

}

function limpar(){
    let res = document.querySelector("#resultado")
    res.innerHTML="<p>O Resultado sairá aqui!</p>"
}





