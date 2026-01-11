// Seletores dos elementos da página
let campoEntrada = document.querySelector('input#campoEntrada')
let caixaLista = document.querySelector('select#caixaLista')
let areaResultado = document.querySelector('div#areaResultado')

// Array para armazenar os números digitados
let numeros = []

// Verifica se o número está dentro do intervalo permitido
function validarNumero(numero) {
    return Number(numero) >= 1 && Number(numero) <= 100
}

// Verifica se o número já foi adicionado
function numeroDuplicado(numero, lista) {
    return lista.includes(Number(numero))
}

// Adiciona um número à lista
function adicionarNumero() {
    if (validarNumero(campoEntrada.value) && !numeroDuplicado(campoEntrada.value, numeros)) {
        numeros.push(Number(campoEntrada.value))

        let novoItem = document.createElement('option')
        novoItem.text = `Número ${campoEntrada.value} adicionado.`
        caixaLista.appendChild(novoItem)

        areaResultado.innerHTML = ''
    } else {
        window.alert('Número inválido ou já existente na lista.')
    }

    campoEntrada.value = ''
    campoEntrada.focus()
}

// Finaliza e mostra estatísticas
function mostrarEstatisticas() {
    if (numeros.length === 0) {
        window.alert('Adicione números antes de finalizar!')
    } else {
        const quantidade = numeros.length
        let maior = Math.max(...numeros)
        let menor = Math.min(...numeros)
        let soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0)
        let media = soma / quantidade

        areaResultado.innerHTML = `
            <p>Total de números cadastrados: ${quantidade}</p>
            <p>Maior número informado: ${maior}</p>
            <p>Menor número informado: ${menor}</p>
            <p>Soma de todos os números: ${soma}</p>
            <p>Média dos números digitados: ${media.toFixed(2)}</p>
        `
    }
}