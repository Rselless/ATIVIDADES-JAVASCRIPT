const leia = require('readline-sync');

let num1=leia.questionInt(`Digite o primeiro número do intervalo: `);
let num2=leia.questionInt(`Digite o último número do intervalo: `);

if(num1>=num2)
    console.log(`Intervalo INvalido!`);
else{
    console.log(`No Intervalo entre ${num1} e ${num2}: `)
    for(let a=num1;a<=num2;a++)
    if (a%3==0 && a%5==0)
    console.log(`\t ${a} é múltiplo de 3 e 5`);
}   