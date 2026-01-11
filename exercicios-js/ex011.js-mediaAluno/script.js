function btnCalcular(){
    let nome = (prompt("Digite o nome do aluno"))
     let res = document.querySelector("#resultado")
      const temNumero = /\d/
       res.style.display ="block"

   if(!nome || nome.trim()==="" || temNumero.test(nome)){   
     res.className="erro"
     res.innerHTML ="❌ Nome inválido! Digite apenas letras."; 
     return 
    }
   
    let n1 =parseFloat(prompt("Digite a primeira nota"))
    let n2 = parseFloat(prompt("Digite a segunda Nota"))
    

    if(isNaN(n1)||  n1 >10 || n1===""){
     res.className="erro"
     res.innerHTML ="<p>❌ Campo inválido ou digitou numero maior que 10 .</p>"
     return

    }else if(isNaN(n2)|| n2 >10 || n2 ===""){
     res.className="erro"
     res.innerHTML ="<p>❌Campo inválido ou digitou numero maior que 10 .</p> ."
     return
    }else{
     let media= (n1 +n2)/2
     let situacao = media

     if(media < 5 ){
          situacao = "reprovado"
     }else if(media >=5 && media <=6){
          situacao= "recuperacao"
     }else{
          situacao = "aprovado"
     }
     

     res.innerHTML =`<p>Nome do Aluno: ${nome}</p>
     <p>As notas Obtidas foram: ${n1} e ${n2}</p>
     <p> A Media obtida foi: ${media}</P>
     <p> Situação do aluno: ${situacao}
     `

     


    }

    
  
      
}