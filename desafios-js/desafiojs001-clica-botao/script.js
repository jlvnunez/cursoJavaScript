

function mostrarMensagem(texto) {
      Swal.fire({
        title: 'Mensagem',
        text: texto, // ← usa o parâmetro recebido
        icon: 'info',
        background: '#665e5e',
        customClass: {
          title: 'meu-titulo',
          htmlContainer: 'meu-texto',
          confirmButton: 'meu-botao',
          icon:'meu-icone',
          popup:'caixa-pequena'
        }
      });
    }


   

document.getElementById("btn1").addEventListener("click",function(){
    mostrarMensagem('Voce clicou no botao um');
});

document.getElementById("btn2").addEventListener("click",function(){
    mostrarMensagem('Voce clicou no botao dois');
});

document.getElementById("btn3").addEventListener("click",function(){
    mostrarMensagem('Voce clicou no botao tres');

});