import {Stack} from "../Stack";
import leia from "readline-sync"

const pilha=new Stack<string>();
let livro:string
let opcao:number=5
function option(){
console.log(`\n1: Adicionar um novo livro na pilha.
2: Listar todos os livros.
3: Retirar um livro da pilha.
0: Sair.`)
opcao=leia.questionInt(`Insira a opcao desejada de 0 a 3: `);

switch(opcao){

    case 1:
    livro=leia.question(`Digite o nome do livro: `)
    pilha.push(livro)
    option()
    break;

    case 2:
    console.log(`Lista de Livros na Pilha: `);
    pilha.printStack()
    option()
    break;

    case 3:
    if(pilha.isEmpty()){
    console.log(`Pilha esta vazia`)}
    else{
    pilha.pop()
    pilha.printStack()
    console.log(`Um Livro foi retirado da pilha!`)}
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