function conversorTemp(){
              // Apaga o conteúdo anterior
              document.getElementById("resultado").innerHTML=""
            let temperatura = parseFloat(document.getElementById("temp").value)

            if(isNaN(temperatura)){
                document.getElementById("resultado").innerHTML="<p>Por favor,digite um valor valido.</p>"
                return
            }

            let kelvin =  temperatura +273.15
            let Fahrenheit = (temperatura * 9/5)+32
            
            document.getElementById("resultado").innerHTML= `
            <h2> Resultado:</h2>
            <p> Graus Kelvin:${kelvin} K</p>
            <p> Graus Fahrenheit:${Fahrenheit} °F </p> `
                   
        }
        
        function limpar(){
            document.getElementById("resultado").innerHTML =""
            document.getElementById("temp").value =""
        }