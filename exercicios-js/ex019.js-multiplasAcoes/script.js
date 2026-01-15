function calc() {
    // 1. Captura as entradas como texto primeiro para validar
    let entrada1 = prompt("Digite o primeiro valor:");
    let entrada2 = prompt("Digite o segundo valor:");

    // 2. VALIDAÇÃO: Verifica se clicou em 'Cancelar' ou deixou vazio
    if (entrada1 === null || entrada2 === null || entrada1.trim() === "" || entrada2.trim() === "") {
        alert("⚠️ Operação cancelada ou campos vazios!");
        return; // Para a execução
    }

    // 3. Conversão para números
    let n1 = parseFloat(entrada1);
    let n2 = parseFloat(entrada2);

    // 4. VALIDAÇÃO: Verifica se são números válidos (evita letras)
    if (isNaN(n1) || isNaN(n2)) {
        alert("❌ Erro: Por favor, digite apenas números!");
        return;
    }

    // 5. Escolha da operação com os símbolos que você gostou
    let menu = `🔢 Valores informados: ${n1} e ${n2}\n`;
    menu += `----------------------------------\n`;
    menu += `Escolha a operação:\n`;
    menu += `[1] ＋ Soma\n`;
    menu += `[2] － Subtração\n`;
    menu += `[3] × Multiplicação\n`;
    menu += `[4] ÷ Divisão`;
    
    let op = parseInt(prompt(menu));

    // 6. Configuração da saída
    let saida = document.querySelector("#saida");
    
    // Estilo para os símbolos ficarem maiores e em negrito (como você pediu)
    let estiloSym = 'style="font-weight: bold; font-size: 1.4em; padding: 0 5px;"';
    let novoResultado = "";

    // 7. Processamento da operação
    switch(op) {
        case 1:
            novoResultado = `<p>${n1} <span ${estiloSym}>＋</span> ${n2} <span ${estiloSym}>＝</span> <strong>${n1 + n2}</strong></p>`;
            break;
        case 2:
            novoResultado = `<p>${n1} <span ${estiloSym}>－</span> ${n2} <span ${estiloSym}>＝</span> <strong>${n1 - n2}</strong></p>`;
            break;
        case 3:
            novoResultado = `<p>${n1} <span ${estiloSym}>×</span> ${n2} <span ${estiloSym}>＝</span> <strong>${n1 * n2}</strong></p>`;
            break;
        case 4:
            if (n2 !== 0) {
                let divisao = (n1 / n2).toLocaleString('pt-BR', { maximumFractionDigits: 2 });
                novoResultado = `<p>${n1} <span ${estiloSym}>÷</span> ${n2} <span ${estiloSym}>＝</span> <strong>${divisao}</strong></p>`;
            } else {
                novoResultado = `<p>❌ <strong>Erro:</strong> Não é possível dividir por zero!</p>`;
            }
            break;
        default:
            alert("⚠️ Opção inválida!");
            return;
    } 

    // 8. Adiciona ao histórico (o += mantém os resultados anteriores na tela)
    // Se for o primeiro cálculo, removemos a mensagem inicial
    if (saida.innerHTML.includes("Escolha um numero")) {
        saida.innerHTML = "";
    }
    
    saida.innerHTML += novoResultado + '<hr style="opacity: 0.2;">';
}

function limpar() {
    let saida = document.querySelector("#saida");
    saida.innerHTML = "<p><strong>Histórico limpo. Escolha uma nova operação!</strong></p>";
}