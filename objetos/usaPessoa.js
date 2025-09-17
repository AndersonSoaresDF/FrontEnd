// Para executar o arquivo através do node utilize o comando:"node ./objetos/usaPessoa.js" na raiz do projeto

const Pessoa = require('./Pessoa.js');   // Importa a classe Pessoa definida no arquivo Pessoa.js, localizado no mesmo diretório (./). O require() carrega o módulo exportado anteriormente com module.exports = Pessoa.

const joao = new Pessoa(80, 1.75); // instanciando um objeto. Cria uma instância (objeto) da classe Pessoa chamada joao, passando os argumentos: peso = 80, altura = 1.75.
console.log(joao.imc());   // Chama o método imc() do objeto joao, que calcula: 80 ÷ (1.75 × 1.75) ≈ 26.12.Resultado impresso no console: 26.122448979591837.  

const pedro = new Pessoa();   // Cria um novo objeto pedro sem fornecer valores iniciais. Os atributos peso e altura ficam undefined até serem atribuídos manualmente.
pedro.peso = 100;   // Atribui diretamente o valor 100 à propriedade peso do objeto pedro.
pedro.altura = 1.6;   // Atribui diretamente o valor 1.6 à propriedade altura.
console.log(pedro.imc());   // Chama o método imc() para pedro. Calcula: 100 ÷ (1.6 × 1.6) = 100 ÷ 2.56 = 39.0625. Resultado impresso no console: 39.0625.
 


