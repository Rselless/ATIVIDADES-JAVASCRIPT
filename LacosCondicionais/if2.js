const leia = require('readline-sync');

let num=leia.questionInt(`Digite um numero: `)
let parImpar
let posNeg

parImpar=(num%2==0)? (`par`):(`impar`)

posNeg=(num>0)?(`positivo`):(`negativo`)

console.log(`O numero ${num} é ${parImpar} e ${posNeg}`)