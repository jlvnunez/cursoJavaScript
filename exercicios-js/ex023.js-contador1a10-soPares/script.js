function contar(){
    let saida =document.querySelector("#saida")
    saida.innerHTML += `<h2>Numeros pares de 1 à 10</h2>`
  
   
     for(let contador = 2;contador <=10;contador +=2) {
        saida.innerHTML += ` ${contador} &#x1F449;`     
}
        saida.innerHTML += ` &#x1F3C1;`
}  

function limpar(){
    let saida = document.querySelector("#saida")
    saida.innerHTML =""
}


