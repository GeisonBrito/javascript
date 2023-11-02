const Prompt = require('prompt-sync')

const prompt = Prompt()

let aa = prompt("Digite um numero: ")
let bb = prompt("Digite um numero: ")
let cc = prompt("Digite um numero: ")

let a = parseInt(aa)
let b = parseInt(bb)
let c = parseInt(cc)

const verificar_triangulo = ((a,b,c) =>{

    if(a+b>c && a + c > b && b + c > a){
        console.log('As medidas formam um triangulo')
        return true  
    }
    else{
        console.log("Não forma um triângulo")
        return false
    }

})
const classifica_triangulo = ((a,b,c) => {
    if(a == b && b == c && a == c){
        console.log('Triangulo Equilátero')
    }else if(a != b && b != c && a != c){
        console.log('Triangulo Escaleno')
    }else{
        console.log('Triangulo isôsceles')
    }

})

if(verificar_triangulo(a,b,c)){
    classifica_triangulo(a,b,c)
}
