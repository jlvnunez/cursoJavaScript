function analisar(){

    let meses = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')
    let diaSemana = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado')
    let agora = new Date
    let res = document.querySelector("#resultado")

    let dia = agora.getDate()
    let mes =agora.getMonth()
    let ano = agora.getFullYear()
    let semana = agora.getDay()
    let hora = agora.getHours()
    let minuto =agora.getMinutes()
    let segundo = agora.getSeconds()
    
    res.innerHTML=`<p>Dia: ${dia}</P>`
    res.innerHTML+=`<p>Mes: ${meses[mes]}</P>`
    res.innerHTML+=`<p>Ano: ${ano}</P>`
    res.innerHTML+=`<p>Dia da Semana: ${diaSemana[semana]}</P>`
    res.innerHTML+=`<p>Hora: ${hora}</P>`
    res.innerHTML+=`<p>Minutos: ${minuto}</P>`
    res.innerHTML+=`<p>Segundos: ${segundo}</P>`
}

function limpar(){
    let res = document.querySelector("#resultado")
    res.innerHTML="<p>O Resultado sairá aqui!</p>"
}





