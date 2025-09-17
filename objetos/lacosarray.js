// 01: Criação de um array de strings contendo nomes de frutas.
let frutas = ["maçã", "banana", "laranja", "uva", "melancia"];

// 02: Laço tradicional usando índice. Itera do i = 0 até o último índice do array. frutas[i] acessa o elemento correspondente. Resultado: imprime cada fruta com sua posição.
console.log("FOR:");      // FOR deve ser utilizado quando SE SABE a quantidade de repetições previamente.
for (let i = 0; i < frutas.length; i++) {
  console.log(`Fruta na posição ${i}: ${frutas[i]}`);
}

// 03: Laço while com lógica equivalente ao for, mas estrutura separada. Útil quando o controle é mais dinâmico ou externo ao loop.
console.log("WHILE:");      // WHILE deve ser utilizado quando NÃO se sabe quantas vezes uma ação será repetida, incluindo nenhuma repetição. 
let j = 0;
while (j < frutas.length) {
  console.log(`Fruta na posição ${j}: ${frutas[j]}`);
  j++;
}

// 04: Executa o corpo do laço ao menos uma vez antes de testar a condição. Útil para garantir uma execução mínima mesmo com array vazio.
console.log("DO...WHILE:");     // DO...WHILE deve ser utilizado quando NÃO se sabe quantas vezes uma ação será repetida, mas necessita de no mínimo UMA repetição.
let k = 0;
do {
  console.log(`Fruta na posição ${k}: ${frutas[k]}`);
  k++;
} while (k < frutas.length);

// 05: Laço moderno e limpo. Ideal para percorrer todos os elementos de um array (sem precisar de índice). Mais legível e intuitivo para arrays simples ou de objetos.
console.log("FOR...OF:");     // FOR...OF é especialmente adequado e direcionado para arrays de objetos.
for (let fruta of frutas) {
  console.log("Fruta:", fruta);
}
