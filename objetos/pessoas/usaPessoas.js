// Objetivo do exemplo: demonstrar a utilização dos conceitos de encapsulamento (com adição de condicionais) e Herança (classes Pessoa e PF disponíveis na pasta /objetos/pessoas).
// A seguir tem-se o código usaPessoas.js, utilizado para importar e instanciar os objetos  definidos nos arquivos Pessoa.js  e PF.js (localizados dentro da pasta “/objetos/pessoas”). Para execução utilize o comando, na raiz do projeto: “node ./objetos/usaPessoas.js”.

console.log("===== Objeto Pessoa =====");   // Apresenta o cabeçalho explicativo e imprime o título da primeira seção no console, que utilizará a classe Pessoa.
const Pessoa = require('./Pessoa');  // Importa a classe Pessoa, definida no arquivo Pessoa.js.
const x = new Pessoa();   // Cria uma nova instância da classe Pessoa.
// resposta = x.setNome('Leandro');
resposta = x.setNome('');   // Testa a atribuição de nome usando o método setNome() com valor vazio (''). Como o valor é inválido, o retorno será false, e a mensagem "Nome vazio" será exibida. Demonstra encapsulamento com verificação de entrada. 
console.log(resposta);

if (resposta) {
  console.log(x.getNome());
} else {
  console.log("Nome vazio");
}

resposta = x.setEmail('vaguetti@gmail.com');   // Aqui o e-mail fornecido é válido, então setEmail() retorna true. O getEmail() é chamado com sucesso. 
console.log(resposta);

if (resposta) {
  console.log(x.getEmail());
} else {
  console.log("E-mail vazio");
}


// ===================================

console.log("===== Objeto PF =====");   // Imprime o título da segunda seção e importa a classe PF (Pessoa Física), que herda de Pessoa.
const PF = require('./PF');
const y = new PF();   // Cria uma instância da classe PF.
resposta = y.setNome('Pedro');   // Atribui corretamente o nome "Pedro" e exibe-o com sucesso. Utiliza herança do método setNome() da classe base Pessoa. // imprime y.getNome() se válido.
console.log(resposta);

if (resposta) {
  console.log(y.getNome());
} else {
  console.log("Nome vazio");
}

resposta = y.setEmail('');   // // imprime "Email vazio" pois o valor é inválido. Testa a validação do método setEmail() com valor inválido. Exibe "Email vazio" por meio da lógica condicional.
console.log(resposta);

if (resposta) {
  console.log(y.getEmail());
} else {
  console.log("E-mail vazio");
}

resposta = y.setCPF('123456789-10');   // // se válido, imprime y.getCPF(). Executa o método setCPF() da classe filha PF com valor válido. Exibe "123456789-10" via getCPF().
console.log(resposta);

if (resposta) {
  console.log(y.getCPF());
} else {
  console.log("CPF vazio");
}

// ============================================================

console.log("==== Objeto Aluno =====");
const Aluno = require('./Aluno');     // Importa a classe Aluno, que herda de PF e indiretamente de Pessoa.
const w = new Aluno();      // Cria um objeto w do tipo Aluno.      

// Usa o método setNome() herdado da classe Pessoa. Atribui o nome "Pedro", que é um valor válido. A resposta será true, e o nome será impresso. Caso o nome fosse vazio (''), o retorno seria false e exibiria "Nome vazio".
resposta = w.setNome('Pedro');   
console.log(resposta);
if(resposta){
  console.log(w.getNome());
}else{
  console.log("Nome vazio");
}

// O método setMatricula() valida dois critérios: A matrícula deve ter exatamente 8 caracteres; Deve começar com "20"; '20123456' atende a ambos → retorna true; O método getMatricula() então imprime o valor.Exemplo de uso de operadores lógicos && e métodos como .startsWith() para validação.
resposta = w.setMatricula('20123456')
console.log(resposta);
if(resposta){
  console.log(w.getMatricula());
}else{
  console.log("Matricula Inválida");
}

// O método setCurso() aceita apenas os valores "ADS" ou "SI". Aqui é passado 'SIS', que é inválido, portanto: Retorna false; Exibe "Curso Inválido"; Demonstra o uso do operador lógico || (ou): curso === 'ADS' || curso === 'SI'
resposta = w.setCurso('SIS')
console.log(resposta);
if(resposta){
  console.log(w.getCurso());
}else{
  console.log("Curso Inválido");
}




