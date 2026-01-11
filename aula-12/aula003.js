var agora = new Date()
var diaSem = agora.getDay()
/* 0-domingo
1-segunda
2-terca
3-quarta 
4-quinta
5-sexta
6-sabado */

//console.log(diaSem)
switch(diaSem){
    case 0:
        console.log(`domingo`)
        break
        case 1:
             console.log(`segunda`)
        break
        case 2:
             console.log(`terca`)
        break
        case 3:
             console.log(`quarta`)
        break
        case 4:
             console.log(`quinta`)
        break
        case 5:
             console.log(`sexta`)
        default:
            console.log('[erro!]dia invalido')
            break
}