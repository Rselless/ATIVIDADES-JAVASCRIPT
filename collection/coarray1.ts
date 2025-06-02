import leia from 'readline-sync';

const lista:Array<number>=new Array<number>(2,5,1,3,4,9,7,8,10,6)
let num:number=leia.questionInt(`Digite o número que você deseja encontrar: `)

if(lista.indexOf(num)===-1){
(console.log(`O número ${num} não foi encontrado!`))
}else {
(console.log(`O número ${num} está localizado na posição:${lista.indexOf(num)}`))}