


listaA = [22,24,14,78,28,99,8,15,13,10]
listaB = [17,1,16,33,12,32,45,7,78,88]
console.log(`${listaA} e ${listaB}`)

let listaC = []
for(let i=0, a=0, b=0; i< 20 ;i ++){
    if(i%2 == 0){
        listaC.push(listaA[a++])    
    } else {
        listaC.push(listaB[b++])    
    }
}


console.log(listaC)
console.log(listaC.sort((a,b) => a - b))
