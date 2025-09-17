function soma(x, y) // recebe dados como parâmetro. Declara uma função tradicional chamada soma que recebe dois parâmetros: x e y. Utilizada para encapsular uma lógica reutilizável (neste caso, uma operação de soma).
{
  let soma = x + y; // busquem declarar apenas variáveis LET nas functions. Cria uma variável local soma, contendo a soma dos dois argumentos recebidos. É prática recomendada usar let para garantir escopo local dentro da função.
  
  return soma;  // retorna a informação. Retorna o valor da variável soma, permitindo que a função envie o resultado para quem a chamou.
}
const subtrair = function(x, y) { return x - y; }  // Declara uma função anônima (sem nome) atribuída a uma constante subtrair. Executa uma subtração e retorna o resultado. Sintaxe alternativa válida e comum no JavaScript.

module.exports = { soma, subtrair }  // módulos são utilizados para disponibilizar bibliotecas e funções e classes. Introduz o conceito de módulos em JavaScript – fundamentais para organizar e reutilizar código em diferentes arquivos. Define o que será exportado pelo módulo. Aqui, tanto a função soma quanto subtrair serão disponibilizadas para serem importadas e reutilizadas em outros arquivos do projeto.

