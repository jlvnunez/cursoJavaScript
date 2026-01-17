function iniciar(){
let dia = parseInt(prompt("Digite um DIA DO MÊS"))
let mesEntrada = prompt("Digite um MÊS DO ANO")
let res =document.querySelector("#saida")

// 1. Verificação de dia inválido (menor que 1 ou maior que 31)
    if (isNaN(dia) || dia < 1 || dia > 31) {
        res.innerHTML = "<p><strong style='color:red;'>Erro: Dia inválido! Digite um valor entre 1 e 31.</strong></p>";
        return; // O 'return' para a execução da função aqui mesmo
    }

    if (!mesEntrada || !isNaN(Number(mesEntrada))) {
        res.innerHTML = "<p style='color:red;'><strong>Erro:</strong> Digite o nome do mês por extenso (não use números).</p>";
        return;
    }

if (!mesEntrada) return; // Evita erro se o usuário cancelar o prompt
    let mes = mesEntrada.toLowerCase().trim();

   

let estacao =""

if ((mes === "setembro" && dia >= 22) || mes === "outubro" || mes === "novembro" || (mes === "dezembro" && dia < 21)) {
        estacao = "Primavera";
    } else if ((mes === "dezembro" && dia >= 21) || mes === "janeiro" || mes === "fevereiro" || (mes === "março" || mes === "marco" && dia < 20)) {
        estacao = "Verão";
    } else if ((mes === "março" || mes === "marco" && dia >= 20) || mes === "abril" || mes === "maio" || (mes === "junho" && dia < 21)) {
        estacao = "Outono";
    } else if ((mes === "junho" && dia >= 21) || mes === "julho" || mes === "agosto" || (mes === "setembro" && dia < 22)) {
        estacao = "Inverno";
    } else {
       // estacao = "<strong style = color:red Dados inválidos. Verifique o dia e o mês!></strong>";
    }
res.innerHTML= `<p>No dia <strong>${dia}</strong> do Mês de <strong>${mes}</strong>,estamos na estação de <mark><strong>${estacao}</strong></mark></p>`

}


function limpar(){
    let res = document.querySelector("#saida")
    res.innerHTML="<strong>saida de dados...</strong>"
}