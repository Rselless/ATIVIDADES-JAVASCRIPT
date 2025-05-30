const leia = require('readline-sync');
let men21=0,mais50=0,idade=0

while(idade>=0){
    idade=leia.questionInt(`Digite uma idade: `)
    if(idade<21 && idade>0)
        men21++
    if(idade>50)
        mais50++
}
console.log(`Total de pessoas menores de 21 anos: ${men21}\nTotal de pessoas maiores de 50 anos: ${mais50}`)