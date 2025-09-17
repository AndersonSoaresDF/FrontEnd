var x = 6;  // Declara a variável x usando var.
console.log(x); // Exibe no console o valor de x.
const y = "a"; // Declara a constante y com valor "a". Const não permite reatribuição e possui escopo de bloco.
// y = "b"; Comentada. Se fosse executada, causaria erro: Uncaught TypeError: Isso ocorre porque y é constante e seu valor não pode ser alterado após declarado.
console.log(y); // Exibe o valor de y. Resultado: "a".
// VARIÁVEIS GLOBAIS E LOCAIS
{
  let z = 4; // Cria a variável z com valor 4 no escopo do bloco. let também tem escopo de bloco – só existe dentro das chaves {}.
  console.log(x); // Acessa a variável global x. Resultado: 6
  console.log(y); // Acessa a constante y. Resultado: "a".
  console.log(z); // Acessa z, válida dentro deste bloco. Resultado: 4.
}
// console.log(z);  // <-- Essa linha, se descomentada, gera erro pois z é local ao bloco acima
// Fora do bloco, z não existe, então essa linha gera: Uncaught ReferenceError: z is not defined



