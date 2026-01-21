function contar(){
    let saida =document.querySelector("#saida")
    saida.innerHTML += `<h2>contando de 1 à 10</h2>`
  
   
     for(let contador = 1;contador <=10;contador ++) {
        if(contador % 2 == 0){
         saida.innerHTML += `<mark><strong> ${contador} </strong></mark>&#x1F449`
    }else {
         saida.innerHTML += ` ${contador}&#x1F449`
    }
    saida.innerHTML += `&#x1F3C1;`
}
}  

function limpar(){
    let saida = document.querySelector("#saida")
    saida.innerHTML =""
}


