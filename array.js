frutas = {
banana : {    
    quantidade: 15,
    unidade: 'cx'
    origem: 'japão'
},
morango : {    
    quantidade: 15,
    unidade: 'cx'
    origem: 'brasil'
}, 
}

frutas.forEach((value, key) => {
    console.log('${key} ${value}')
})
console.log()