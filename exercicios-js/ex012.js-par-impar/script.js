function btnAnalisar(){
     let entrada = prompt("Digite um Numero")
     let res = document.querySelector("#resultado")

    // 1. Verifica se clicou em 'Cancelar' ou se o campo está vazio
     if(entrada === null || entrada.trim()===""){
          res.innerHTML="Dados invalidos! digite apenas numeros."
          return
     }
     // 2. Converte para número e verifica se é um número válido   
     let num = parseFloat(entrada)
     if (isNaN(num)) {
        res.innerHTML = "Dados Inválidos! digite apenas números.";
        return
}

      // let tipo = (num % 2 == 0)?'<strong>Par</strong>' : '<strong>Impar</strong>'
      let tipo 
      if(num % 2 ==0){
          tipo = "<strong>Par</strong>"
      }else {
          tipo = "<strong>Impar</strong>"
      }
      
      res.innerHTML = `O Numero ${num} é ${tipo}`    

}


function limpar(){
     let res = document.querySelector("#resultado")
     res.innerHTML ="<p><strong>O Resultado aparece aqui !!</strong></p>"
      
}