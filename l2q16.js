//Faça um programa que calcule as raízes de uma equação do segundo grau, na forma 
const Prompt = require('prompt-sync')

const prompt = Prompt()

let aa = prompt("Digite a: ")
let bb = prompt("Digite b: ")
let cc = prompt("Digite c: ")

let a = parseInt(aa)
let b = parseInt(bb)
let c = parseInt(cc)

let delta = (b**2) - 4 * a * c


if(a == 0){
    console.log("Erro o A não pode ser menor ou igual a 0")

}else if(delta == 0 ){
    console.log("Sua equação possui uma raiz real")

}else if(delta < 0 ){
    console.log("Sua equação não possui raizes")

}else if(delta > 0 ){
    console.log("Sua equação possui duas raizes reais")
}

