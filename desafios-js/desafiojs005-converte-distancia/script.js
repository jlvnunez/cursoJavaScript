function conversor(){
              // Apaga o conteúdo anterior
              document.getElementById("resultado").innerHTML=""
            let metros = parseFloat(document.getElementById("metros").value)

            if(isNaN(metros)){
                document.getElementById("resultado").innerHTML="<p>Por favor,digite um valor valido.</p>"
                return
            }

            let km = metros/1000
            let hm = metros/100
            let dam =metros/10
            let dm =metros *10
            let cm = metros*100
            let mm = metros*1000
            document.getElementById("resultado").innerHTML= `
            <h2> Resultado:</h2>
            <p> Metros:${metros}m </p>
            <p> Quilometros:${km}km </p>
            <p> Hectômetros:${hm}hm </p>
            <p> Decâmetros:${dam}dam </p>
            <p> Decimetros:${dm}dm </p>
            <p> Centimetros:${cm}cm </p>
            <p> Milímetros:${mm}mm </p> `
          
        }