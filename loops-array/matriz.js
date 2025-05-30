const matriz=[[1,2,3],
              [4,5,6],
              [7,8,9]];
const diagonalprim=[],diagonalsec=[];
let a=0,soma1=0,b,soma2=0;

for (a;a<3;a++){
diagonalprim.push(matriz[a][a])
soma1+=diagonalprim[a]
diagonalsec.push(matriz[a][2-a])
soma2+=diagonalsec[a]
}
console.log(`Elementos da Diagonal Principal: ${diagonalprim} e a soma dos elementos e ${soma1}`)
console.log(`Elementos da Diagonal Principal: ${diagonalsec} e a soma dos elementos e ${soma2}`)