function btnOk(){
const a = parseFloat(prompt("Digite o valor de (a)"))
const b = parseFloat(prompt("Digite o valor de (b)"))
const c = parseFloat(prompt("Digite o valor de (c)"))

const res = document.querySelector("div#resultado")

//validacoes
if (isNaN(a)|| isNaN(b)|| isNaN(c) ){
  res.innerHTML ="<p class='erro'>Por favor,digite numeros validos.</p>"

} else if(a === 0){
   res.innerHTML = "<p class ='erro'> 'a'deve ser diferente de 0.</p>"
} else {
   const delta = b * b - 4 * a * c

   if (delta < 0 ){
      res.innerHTML = "<p class ='erro'> Nao existem raizes reais. Δ =" + delta + " </p>"

   } else{
      
        const raizDelta = Math.sqrt(delta);
        const x1 = (-b + raizDelta) / (2 * a)
        const x2 = (-b - raizDelta) / (2 * a)

        res.innerHTML =`
        <p class= 'ok'> (a) =  ${a}  (b) =  ${b} (c) =  ${c}</p>
        <p class= 'ok'> Δ (delta): ${delta}</p>
        <p class= 'ok'> X1 = ${x1}</p>
        <p class= 'ok'> X2 = ${x2}</p>

         `
   }  
}
}

function limpar(){
            document.getElementById("resultado").innerHTML =""
            // document.getElementById("res").value =""
        }
