const leia = require('readline-sync');

let nome=leia.question(`Insira o nome: `);
let codcargo=leia.questionInt(`Insira o codigo do cargo: `);
let salario=leia.questionFloat(`Insira o Salario atual: `);
let cargo=``
let reajuste=0

switch (codcargo){
case 1:
    cargo=`Gerente`
    reajuste=0.10
    break;
case 2:
    cargo=`Vendedor`
    reajuste=0.07
    break;
case 3:
    cargo=`Supervisor`
    reajuste=0.09
    break;
case 4:
    cargo=`Motorista`
    reajuste=0.06
    break;
case 5:
    cargo=`Estoquista`
    reajuste=0.05
    break;
case 6:
    cargo=`Tecnico de TI`
    reajuste=0.08}
let novSal=salario+(salario*reajuste)
console.log(`O Colaborador ${nome} no cargo de ${cargo} recebera um novo salario de: R$${novSal.toFixed(2)}`)