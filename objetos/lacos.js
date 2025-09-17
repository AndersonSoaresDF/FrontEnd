
console.log("Laço for:");     // Exibe a introdução do laço for.

for (let i = 1; i <= 5; i++) {      // Estrutura de repetição com: Inicialização: i = 1; Condição: enquanto i <= 5; Incremento: i++ (aumenta 1 a cada interação); Resultado: imprime de 1 a 5.
  console.log("Valor de i:", i);
}

console.log("Laço while:");     // Exibe a introdução do laço while.

let j = 1;      // Declaração da variável j; Enquanto j <= 5, executa o bloco e incrementa; Resultado: imprime de 1 a 5 com console.log.
while (j <= 5) {
  console.log("Valor de j:", j);
  j++;
}

console.log("Laço do...while:");      // Exibe a introdução do laço do...while.

let k = 5;      // Executa o bloco ao menos uma vez; Enquanto k >= 1, imprime e decrementa k; Resultado: imprime de 5 até 1.
do {
  console.log("Valor de k:", k);
  k--;
} while (k >= 1);
