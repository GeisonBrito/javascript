
//Divisível por 4. Sendo assim, a divisão é exata com o resto igual a zero;

//Não pode ser divisível por 100. Com isso, a divisão não é exata, ou seja, deixa resto diferente de zero;

//Pode ser que seja divisível por 400. Caso seja divisível por 400, a divisão deve ser exata, deixando o resto igual a zero.

const Prompt = require('prompt-sync')

const prompt = Prompt()


let ano1 = prompt("Digite o ano: ")
let ano = parseInt(ano1)
divisao4 = ano/4 
divisao100 = ano/100


    if(divisao4 === 0.25 * ano && divisao100 ca===-0.1 *ano) {
        console.log("O ano é bissexto")
    }  
    else{
        console.log("O ano não é bissexto")
    }

if(dvisao4 == 0.25 * ano && divisao100== 0.1 *ano) {
    console.log("O ano é bissexto")
}
else{
    console.log("O ano não é bissexto")
}

bissexto(ano,divisao4,divisao100)