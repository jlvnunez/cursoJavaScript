function btnOk() {
    // Pegando os valores dos inputs
    const a = parseFloat(document.getElementById("fnumA").value);
    const b = parseFloat(document.getElementById("fnumB").value);
    const c = parseFloat(document.getElementById("fnumC").value);

    const res = document.querySelector("div#resultado");

    // Validações
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        res.innerHTML = "<p class='erro'>Por favor, preencha todos os campos com números válidos.</p>";
    } else if (a === 0) {
        res.innerHTML = "<p class='erro'>O valor de 'a' deve ser diferente de 0.</p>";
    } else {
        const delta = b * b - 4 * a * c;

        if (delta < 0) {
            res.innerHTML = `<p class='erro'>Não existem raízes reais. <br> Δ = ${delta}</p>`;
        } else {
            const raizDelta = Math.sqrt(delta);
            const x1 = (-b + raizDelta) / (2 * a);
            const x2 = (-b - raizDelta) / (2 * a);

            res.innerHTML = `
                <div class='ok'>
                    <p><strong>Valores:</strong> a=${a}, b=${b}, c=${c}</p>
                    <p><strong>Δ (delta):</strong> ${delta}</p>
                    <p><strong>X1:</strong> ${x1}</p>
                    <p><strong>X2:</strong> ${x2}</p>
                </div>
            `;
        }
    }
}

function limpar() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("fnumA").value = "";
    document.getElementById("fnumB").value = "";
    document.getElementById("fnumC").value = "";
}