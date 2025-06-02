import leia from 'readline-sync';

const lista:Set<number>=new Set<number>([])
let contador=0

while (lista.size<10){
lista.add(leia.questionInt(`Digite numeros nao repetidos: `))
}

console.log(`Listar dados do Set:`);
for(let numeros of lista){
console.log(`${numeros}`)}