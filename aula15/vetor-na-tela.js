let valores = [2, 4, 9, 3, 5, 8]
/*
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} em o valor ${valores[pos]}`)
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}