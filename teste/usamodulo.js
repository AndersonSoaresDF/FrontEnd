// importação dos módulos disponíveis no arquivo definemodulo.js. Comentário explicativo que introduz o uso de módulos externos.
const oper = require('./definemodulo.js'); // Importa um módulo externo localizado em ./teste/definemodulo.js. O objeto é atribuído à constante oper, permitindo o uso de oper.soma() e oper.subtrair().

var x = 3, y = 5; // Declara e inicializa duas variáveis: x e y.

console.log(oper.soma(x, y)); // Chama a função soma() a partir do módulo importado, passando x e y como argumentos: Executa soma(3, 5) → resultado: 8

console.log(oper.subtrair(y, x)); // Chama a função subtrair() do mesmo módulo: Executa subtrair(5, 3) → resultado: 2

