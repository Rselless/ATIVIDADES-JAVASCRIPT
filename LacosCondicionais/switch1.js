const leia = require('readline-sync');

let codProd=leia.questionInt(`Insira o codigo do produto: `);
let quant=leia.questionInt(`Insira a quantidade do produto: `);
let produto=``
let valor=0

switch (codProd) {
case 1:
    produto= `Cachorro Quente`
    valor=10.00
    break;
case 2:
    produto= `X-Salada`
    valor=15.00
    break;
case 3:
    produto= `X-Bacon`
    valor=18.00
    break;
case 4:
    produto= `Bauru`
    valor=12.00
    break;
case 5:
    produto= `Refrigerante`
    valor=8.00
    break;
case 6:
    produto= `Suco de Laranja`
    valor=13.00
}
let total=quant*valor
console.log(`Voce comprou ${quant} ${produto} de R$${valor.toFixed(2)} e o preço final foi R$${total.toFixed(2)}`)