import {Queue} from "../Queue";
import leia from 'readline-sync';

const fila=new Queue<string>();
let nome:string;
let opcao:number=5;
function option(){
console.log(`\n1: Adicionar um novo Cliente na fila.
2: Listar todos os Clientes.
3: Retirar Cliente da fila.
0: Sair.`)
opcao=leia.questionInt(`Insira a opcao desejada de 0 a 3: `);

switch(opcao){

    case 1:
    nome=leia.question(`Digite o nome do cliente: `)
    fila.enqueue(nome)
    option()
    break;

    case 2:
    console.log(`Lista de Clientes na Fila: `);
    fila.printQueue()
    option()
    break;

    case 3:
    if(fila.isEmpty()){
    console.log(`Fila esta vazia`)}
    else{
    fila.dequeue()
    fila.printQueue()
    console.log(`O Cliente foi Chamado!`)}
    option()
    break;

    case 0:
    console.log(`Programa Finalizado!`)
    break;

    default:
    console.log(`Opcao invalida`)
    option();
    
}
}if(opcao===5){
option();}
