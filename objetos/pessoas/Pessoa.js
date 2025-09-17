//      Objetivo do exemplo: demonstrar conceitos de relacionamentos simples entre as classes

const Telefone = require('./Telefone');     // Importa as classes Telefone e Endereco. São utilizadas para estabelecer relacionamentos entre objetos (composição).
const Endereco = require('./Endereco');

class Pessoa {   // Declara a classe Pessoa, estrutura que representa um objeto com dados privados e métodos públicos para manipulá-los.
  #nome;   // Declara dois atributos privados com #, acessíveis apenas dentro da própria classe. Boa prática para encapsular dados sensíveis.
  #email;
//      Classes relacionadas com Pessoa
  #endereco;         // relacionamento simples de 1 para N (uma pessoa tem um endereço).
  #telefones = [];   // relacionamento simples de N para N (uma pessoa pode ter vários telefones).

  setEndereco(endereco) {     // Define o endereço de uma pessoa se o parâmetro for uma instância válida da classe Endereco. Também define uma referência inversa: endereco.setPessoa(this).
    if (endereco instanceof Endereco) {
      this.#endereco = endereco;
      endereco.setPessoa(this); // referência cruzada
      return true;
    } else {
      return false;
    }
  }

  getEndereco() {     // Retorna o objeto Endereco associado à pessoa.
    return this.#endereco;
  }
  
  addTelefone(telefone) {     // Adiciona um objeto Telefone ao array #telefones. Garante que o objeto seja instância da classe Telefone. Também define uma referência inversa: telefone.setPessoa(this).
    if (telefone instanceof Telefone) {
      this.#telefones.push(telefone);
      telefone.setPessoa(this); // referência cruzada
      return true;
    } else {
      return false;
    }
  }
 
  getTelefones() {      // Retorna o array de telefones associados à pessoa.
    return this.#telefones;
  }

  //=========================================

  //      Métodos tradicionais com validação: Se o valor for vazio ou nulo, retorna false. Se for válido, atribui o valor e retorna true.

  setNome(nome) {   // Define um método setter com verificação: Atribui valor a #nome somente se nome não for nulo/vazio. Retorna true se a operação foi bem-sucedida, e false caso contrário. Exemplo de encapsulamento com validação. 
    if (nome) {
      this.#nome = nome;
      return true;
    } else {
      return false;
    }  
  }
  getNome() {   // Retorna o valor do atributo privado #nome.
    return this.#nome;
  }

  setEmail(email) {   // Setter do atributo #email, com lógica condicional semelhante ao setNome().
    if (email) {
      this.#email = email;
      return true;
    } else {
      return false;
    }
  }
  getEmail() {   // Getter público que retorna o valor do e-mail encapsulado.
    return this.#email;
  }
}
module.exports = Pessoa;   // Exporta a classe Pessoa como um módulo para uso em outros arquivos com require().