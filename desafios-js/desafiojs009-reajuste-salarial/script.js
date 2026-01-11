document.querySelector("#btnReajuste").addEventListener("click",function(){

const nome = prompt("Digite o nome do funcionario")
const salarioAtual = parseFloat (prompt("Digite o salario atual"))
const percentualAumento = parseFloat(prompt("Digite o percentual de aumento do funcionario"))
const res = document.getElementById("resultado")
 res.textContent = ""

 if(!nome || nome.trim().length === 0){
    res.innerHTML ="Por favor,insira um nome Valido"
    return
 }
 if(!Number.isFinite(salarioAtual) || salarioAtual <=0){
    res.innerHTML ="Por favor,insira um salario Valido"
    return
 }
 if(!Number.isFinite(percentualAumento)|| percentualAumento < 0 ) {
    res.innerHTML ="Por favor,insira um percentual Valido"
    return
 }
   const aumento = salarioAtual * (percentualAumento / 100)
   const novoSalario = salarioAtual + aumento

    res.innerHTML =`
    <h2>Reajuste Salarial</h2>
    <p><strong>${nome}</strong> recebeu um aumento salarial!</p>
    <p>O Salario atual era de R$ ${salarioAtual.toFixed(2)}.</p>
    <p>Com o aumento de  ${percentualAumento} %, o salario vai aumentar R$ ${aumento.toFixed(2)} no proximo mês.</p>
    <p>De agora em diante, ${nome} vai passar a ganhar R$ ${novoSalario.toFixed(2)}.</p>
    ` 
              
})

function limpar(){
            document.getElementById("resultado").innerHTML =""
            document.getElementById("res").value =""
        }


