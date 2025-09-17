// Objetivo de uma função  = definir um bloco de código reutilizável
// function <nome> (<parametros>){ ... }

function soma(x, y) // Define uma função tradicional chamada soma, que recebe dois parâmetros (x e y). Funções são blocos de código reutilizáveis. 
{
  let soma = x + y; // Busquem declarar apenas variáveis LET nas functions. Cria uma variável local soma que armazena o resultado da soma entre x e y. Utiliza let para manter escopo restrito à função.
  return soma;  // Retorna o valor calculado pela função para quem a chamou.
}
// chamar a função
var print1 = soma(soma(4,7), 3); // Primeiro executa soma(4, 7) → resultado: 11; Depois soma(11, 3) → resultado: 14; Atribui 14 à variável print1 e imprime no console.
console.log(print1); // Atribui 14 à variável print1 e imprime no console. 

var print2 = soma(10, soma(print1, 5)); // Primeiro executa soma(print1, 5) → soma(14, 5) → 19; Depois soma(10, 19) → 29; Resultado: 29
console.log(print2); // Imprime 29

console.log(soma(print1, print2)); // Executa soma(14, 29) → resultado: 43; Imprime: 43

// Abaixo são apresentadas formas distintas de declarações de função, além de exemplos que se utilizam de operadores de subtração, divisão e multiplicação respectivamente.
const subtrair = function(x, y) { return x - y; }; // Declara função como função anônima atribuída a uma constante. Executa 3 - 5 → resultado: -2
console.log(subtrair(3, 5)); // Imprime -2

// arrow function
const dividir = (x, y) => { return x / y; }; // Declaração de função no formato arrow function. Executa 3 / 5 → resultado: 0.6
console.log(dividir(3, 5)); // Imprime 0.6

const multiplicar = (x, y) => { return x * y; }; // Outra arrow function. Executa 3 * 5 → resultado: 15
console.log(multiplicar(3, 5)); // Imprime 15




