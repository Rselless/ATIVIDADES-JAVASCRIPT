const leia = require('readline-sync');

let A=leia.questionInt(`Digita o valor de A: `);
let B=leia.questionInt(`Digita o valor de B: `);
let C=leia.questionInt(`Digita o valor de C: `);

let soma=A+B;

if (soma>C){
    console.log(`A Soma de ${A} + ${B} = ${soma} e é Maior do que ${C}`);
}