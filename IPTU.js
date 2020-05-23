// Giovanna Moreira Borsato Turma 22
// Programa 2

var a, c, v, vf;

a = parseInt( prompt ("Digite a área: ") );
c = parseInt( prompt ("Digite o comprimento: ") );

v = parseInt(a*c);

if(v<=80) // p/ menores ou iguais a 80m2
console.log("O valor do IPTU é: R$ " + v*5);

else if (v<=140 && v>=81) // p/ valores entre 81 e 140 m2
console.log("O valor do IPTU é: R$ " + v*10);

else if (v<=300 && v>=141) // p/ valores entre 300 e 141 m2
console.log("O valor do IPTU é: R$ " + v*20);

else // p/ valores acima de 300 m2
console.log("O valor do IPTU é: R$ " + v*30);

