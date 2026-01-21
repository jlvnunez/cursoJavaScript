function contar(){
    let saida =document.querySelector("#saida")
    saida.innerHTML += `<h2>contando de 1 à 10</h2>`
  
    //let contador = 1
   // while(contador <= 10){
    //    saida.innerHTML += `${contador}&#x1F449`
     //   contador ++      
    //}
       //ou  
     for(let contador =1;contador <=10;contador++) {
        saida.innerHTML += `${contador}&#x1F449`
    }
    saida.innerHTML += `&#x1F3C1`
}

function limpar(){
    let saida = document.querySelector("#saida")
    saida.innerHTML=""
}