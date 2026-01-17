function iniciar(){
let dia = parseInt(prompt("Digite um DIA DO MÊS"))
let mes = prompt("Digite um MÊS DO ANO")
let res =document.querySelector("#saida")

let estacao =""

if((mes === "setembro" && dia >= 22) || mes === "outubro" || mes === "Novembro" || (mes === "dezembro" && dia < 21)){
    estacao = "Primavera"
}else if((mes === "dezembro" && dia >= 21 )|| mes ==="janeiro" || mes ==="fevereiro" || (mes ==="marco && dia <=21")){
    estacao = "Verão"
}else if((mes === "marco" && dia >= 20) || mes === "abril" || mes === "maio" || (mes === "junho" && dia < 21)){
    estacao = "Outono"
}else if((mes === "junho" && dia >= 21) || mes === "julho" || mes === "agosto" || (mes === "setembro" && dia < 22)) {
    estacao = "Inverno}"
}else{
    estacao = "Mes invalido ,Digite novamenta!"
}
res.innerHTML= `<p>No dia <strong>${dia}</strong> do Mês de <strong>${mes}</strong>,estamos na estação de <mark><strong>${estacao}</strong></mark></p>`

}

function limpar(){
    let res = document.querySelector("#saida")
    res.innerHTML="<strong>Aqui sai o resultado...</strong>"
}