function btnAnalisar(){
     let entradaUm = prompt("Digite um Numero")
     let entradaDois = prompt("Digite Outro Numero")
     let res = document.querySelector("#resultado")

    // 1. Verifica se clicou em 'Cancelar' ou se o campo está vazio
     if(entradaUm === null || entradaUm.trim()===""){
          res.innerHTML="Dados invalidos! digite apenas numeros."
          return
     }

     if(entradaDois === null || entradaDois.trim()===""){
          res.innerHTML="Dados invalidos! digite apenas numeros."
          return
     }
     // 2. Converte para número e verifica se é um número válido   
     let n1 = parseFloat(entradaUm)
     let n2 =parseFloat(entradaDois)
     
     if (isNaN(n1) || isNaN(n2)) {
        res.innerHTML = "Dados Inválidos! digite apenas números."
        return
        }
      let maior
      if(n1 > n2){ 
          maior = n1
         res.innerHTML = `Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior é : <mark>${maior}</mark>` 
      }else if(n1 < n2){
          maior = n2
          res.innerHTML = `Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior é : <mark>${maior}</mark>` 
      }else{
          res.innerHTML = `Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, ambos valores são iguais!!`    
      }
      
      }
      

function limpar(){
let res = document.querySelector("#resultado")
res.innerHTML ="<p><strong>O Resultado aparece aqui !!</strong></p>"     
}