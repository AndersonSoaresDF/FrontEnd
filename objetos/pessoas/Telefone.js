class Telefone {
  
  #ddd;
  #numero;
  #pessoas = [];      // Declara três atributos privados com #, protegendo os dados da instância. #ddd: Armazena o DDD do telefone. #numero: Número do telefone. #pessoas: Array de objetos Pessoa associados a este telefone (relacionamento N-N reverso).
  
  
  setPessoa(pessoa) {     // Método que adiciona uma pessoa ao array #pessoas. Valida se o valor não está vazio antes de adicionar. Permite criar a referência reversa do telefone para a(s) pessoa(s) associada(s).
    if (pessoa) {
      this.#pessoas.push(pessoa);
      return true;
    } else {
      return false;
    }
  }
  
  getPessoas() {      // Retorna o array de pessoas vinculadas ao telefone. Útil para navegar os relacionamentos na aplicação.
    
    return this.#pessoas;
  }
  //============================================
  
  setDdd(ddd) {     // Define o DDD do telefone com verificação básica (não pode ser vazio).
    if (ddd) {
      this.#ddd = ddd;
      return true;
    } else {
      return false;
    }
  }
  
  getDdd() {      // Retorna o valor atual do DDD.
    return this.#ddd;
  }
  
  setNumero(numero) {     // Define o número do telefone, também com verificação simples de existência.
    if (numero) {
      this.#numero = numero;
      return true;
    } else {
      return false;
    }
  }
  
  getNumero() {     // Retorna o número do telefone atribuído.
    return this.#numero;
  }
}

module.exports = Telefone;      // Exporta a classe para que ela possa ser utilizada por outros arquivos do projeto, como Pessoa.js.

