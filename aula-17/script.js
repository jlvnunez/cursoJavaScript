function contar(){
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo =document.getElementById('txtpasso')
    let res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo == 0){
        window.alert('[ERRO!] nao pode ficar vazio!!!')}
     else{
        res.innerHTML= 'Contando'
        let i =Number(inicio.value)
        let f=Number(fim.value)
        let p=Number(passo.value)
        if(p<=0){
            window.alert('passo invalido! considerando passo 1')
            p=1
        }
        
        if(i <f){
            //contagem crescente
            for(let c=i;c<=f;c += p){
                res.innerHTML += `${c} \u{1f449}`
            }
        } else{
            //contagem regressiva
            for(let c = i;c >= f;c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`

    }
}