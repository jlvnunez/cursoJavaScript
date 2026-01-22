function contar(){
    let saida =document.querySelector("#saida")
    saida.innerHTML += `<h2>Contagem de 10 à 9</h2>`
  
   
     for(let contador = 10;contador >=1 ;contador --) {
        saida.innerHTML += ` ${contador} &#x1F449;`     
}
        saida.innerHTML += ` &#x1F3C1;`
}  

function limpar(){
    let saida = document.querySelector("#saida")
    saida.innerHTML =""
}


