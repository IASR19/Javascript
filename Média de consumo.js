var v = [], aux=0, media, i; // vetor e variáveis

for(i = 1; i<=6; i++) // laço de repetição
{
  v[i] = prompt ("Digite o " + i + "o valor: ");
  aux += parseInt(v[i]); // variável para armazenar somas das potências
}

media = parseFloat(aux/6); // varável que faz o cálculo da média

console.log("\nO valor médio de consumo é de: " + media + " KWh");
