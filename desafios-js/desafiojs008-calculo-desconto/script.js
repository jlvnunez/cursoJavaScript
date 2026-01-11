let res = document.getElementById("resultado"); //variavel global
document.querySelector("#btnCalcular").addEventListener("click", function() {
    // 1. Buscamos o elemento de resultado (importante declarar!)
    //let res = document.getElementById("resultado");//variavel local
    
    // 2. Entrada de dados
    let produto = prompt("Digite o nome do produto");
    let preco = parseFloat(prompt("Digite o preço do produto"));
    let percentual = parseFloat(prompt("Digite o percentual de desconto"));

    // Limpa o conteúdo anterior
    res.innerHTML = "";
    
    // --- MUDANÇA 1: MOSTRAR A DIV ---
    // Assim que clicamos e temos os dados, tornamos a div visível
    res.style.display = "block";

    // 3. Validação
    if (!isNaN(preco) && !isNaN(percentual) && percentual >= 0 && percentual <= 100) {
        let desconto = preco * (percentual / 100);
        let valorFinal = preco - desconto;

        // 4. Saída de dados formatada
        res.innerHTML = `
            <p><strong>Nome do Produto:</strong> ${produto}</p>
            <p><strong>Valor original:</strong> R$ ${preco.toFixed(2)}</p>
            <p><strong>Desconto:</strong> ${percentual}% (R$ ${desconto.toFixed(2)})</p>
            <hr>
            <p><strong>Valor a Pagar:</strong> R$ ${valorFinal.toFixed(2)}</p>
        `;
    } else {
        res.innerHTML = `<p style="color: white;"><strong>Por favor, insira valores numéricos válidos.</strong></p>`;
    }
});

function limpar(){
    document.getElementById("resultado")
    res.innerHTML=""
    // --- MUDANÇA 2: OCULTAR A DIV ---
    // Ao limpar, escondemos a caixa novamente
    res.style.display ="none";

}