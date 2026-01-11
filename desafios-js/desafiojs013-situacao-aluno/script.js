function validarNota(nota) {
      return !isNaN(nota) && nota >= 0 && nota <= 10 
    }

    function entrar() {
      const res = document.querySelector("#resultado")
      const nome = prompt("Digite o nome do aluno")
      
      res.style.display ="block"
      const temNumero =/\d/

      if (!nome || nome.trim() === "" || temNumero.test(nome)) {
        res.className="erro"
        res.innerHTML = "❌ O campo nome não pode estar vazio!"
        return;
      }

      const n1 = parseFloat(prompt(`Digite a primeira nota de ${nome}`))
      const n2 = parseFloat(prompt(`Digite a segunda nota de ${nome}`))

      if (!validarNota(n1)) {
        res.className = "erro"
        res.innerHTML = "❌ A primeira nota deve ser entre 0 e 10"
        return;
      }
      if (!validarNota(n2)) {
        res.className = "erro "
        res.innerHTML = "❌ A segunda nota deve ser entre 0 e 10"
        return;
      }

      const media = ((n1 + n2) / 2).toFixed(1);
      let situacao = "", classe = ""

      if (media < 3) {
        situacao = "Reprovado ❌"
        classe = "reprovado"
      } else if (media <= 6) {
        situacao = "Recuperação ⚠"
        classe = "recuperacao"
      } else {
        situacao = "Aprovado ✔"
        classe = "aprovado";
      }

      // Aplicamos a classe apenas para cores/estilo, não para visibilidade
      res.className = classe
      
      res.innerHTML = `
        <p><strong>Nome:</strong> <strong>${nome}</strong></p>
        <p><strong>Nota 1:</strong> ${n1}</p>
        <p><strong>Nota 2:</strong> ${n2}</p>
        <p><strong>Média:</strong> ${media}</p>
        <p><strong>Situação:</strong> <span class="${classe}">${situacao}</span></p>

      `;
    }

    function limpar() {
      const res = document.querySelector("#resultado")

      // Mostra a mensagem de "limpo"
      res.style.display = "block"  
      res.className="" // Remove cores de aprovado/reprovado
      res.innerHTML = "<strong>Os dados foram limpos. Clique em Analisar novamente.</strong>"
      
      setTimeout(() => {
       // Após 2.5 segundos, a caixa some da tela completamente
        res.style.display = "none"
        res.innerHTML = ""
      }, 2500);
    }



   