// Objetivo do exemplo: demonstrar a utilização dos conceitos de visibilidade de atributos e métodos e objetivos do encapsulamento. Utilização prática de encapsulamento e visibilidade de atributos definidos na classe Aluno.

const Aluno = require('./Aluno');  // Importa a classe Aluno localizada na subpasta /objetos/escola/Aluno.js. Torna possível criar objetos e utilizar métodos definidos no módulo.

const joao = new Aluno();   // Cria uma instância do objeto Aluno chamada joao.
// joao.#matricula = 1234; --> ERRO.   Comentário de uma tentativa incorreta de acessar o atributo privado #matricula diretamente. Isso gera erro de sintaxe, pois #matricula só pode ser acessado dentro da própria classe.
joao.escola = "IFB";   // Define diretamente o valor do atributo público escola como "IFB". Atributos públicos são acessíveis e modificáveis fora da classe.
joao.setMatricula(12345);   // Utiliza o método setMatricula(), que permite definir o valor do atributo privado #matricula de forma segura.
joao.setCurso("Programação de FrontEnd");   // Define o atributo privado #curso utilizando o método público setCurso().

// console.log(joao.#matricula); --> ERRO.   Comentário de tentativa incorreta de acesso direto a atributo privado. Isso também geraria erro de compilação.

console.log(joao.getMatricula());   // Exibe o valor de #matricula por meio do getter público getMatricula(). Retorna: 12345.

console.log(joao.getCurso());   // Exibe o valor de #curso usando o método getCurso(). Retorna: "Programação de FrontEnd".

console.log(`Escola : ${joao.escola}`);   // Exibe diretamente o valor do atributo público escola.Saída: Escola : IFB


