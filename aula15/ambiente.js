let num = [7, 9, 1, 8, 2]
num.sort()
num.push(6)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
if(pos == -1){
    console.log(`Não encontrado`)
} else{
    console.log(`O valor 9 está na posição: ${pos}`) 
} 