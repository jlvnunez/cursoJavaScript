function contagem() {
    let saida = document.getElementById("saida")
    let numInput = document.getElementById("fnum").value
    
    // Validação simples: se o campo estiver vazio
    if (numInput.length == 0) {
        saida.innerHTML = `<p>Por favor, digite um número acima.</p>`
        return // Para a execução aqui
    }

    let num = Number(numInput)
    
    // Resetamos o conteúdo da saída (usando = em vez de += no início)
    // para que uma nova contagem limpe a anterior
    saida.innerHTML = `<h2>Contando de 0 até ${num}:</h2>`
    
    for (let cont = 0; cont <= num; cont++) {
        // Adicionamos os números. Note o ponto e vírgula no código do emoji
        saida.innerHTML += ` ${cont} &#x1F449; `
    }
    
    saida.innerHTML += ` &#x1F3C1;`
}


function limpar() {
    let saida = document.getElementById("saida");
    let input = document.getElementById("fnum");
    
    // Limpa o conteúdo da seção de saída
    saida.innerHTML = "<p>Preencha os dados acima e aperte o botão.</p>";
    
    // Limpa o valor do campo de entrada
    input.value = "";
}