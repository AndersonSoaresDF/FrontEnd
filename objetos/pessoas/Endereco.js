class Endereco {
  
  #logradouro;
  #cep;
  #pessoas = [];      // Atributos privados com # para garantir encapsulamento. #logradouro e #cep: dados principais de endereço.  #pessoas: array para armazenar as pessoas associadas a esse endereço (relacionamento reverso 1–N).
  
  
  setPessoa(pessoa) {     // Adiciona um objeto Pessoa ao array de pessoas associadas ao endereço. Verifica se o valor é válido antes de inserir.
    if (pessoa) {
      this.#pessoas.push(pessoa);
      return true;
    } else {
      return false;
    }
  }     
  
  
  getPessoas() {      // Retorna todas as pessoas vinculadas a esse endereço. Permite navegar do endereço para as pessoas (relacionamento reverso).
    return this.#pessoas;
  }
  //=====================================
  
  setLogradouro(logradouro) {     // Atribui o nome da rua, avenida, etc. Valida que o valor não seja vazio ou null.
    
    if (logradouro) {
      this.#logradouro = logradouro;
      return true;
    } else {
      return false;
    }
  }
  
  getLogradouro() {     // Retorna o valor do logradouro.
    return this.#logradouro;
  }
  
  setCep(cep) {     // Atribui o valor do CEP com validação.
    if (cep) {
      this.#cep = cep;
      return true;
    } else {
      return false;
    }
  }
  
  getCep() {      // Retorna o valor do CEP.
    return this.#cep;
  }
}

module.exports = Endereco;      // Exporta a classe Endereco para ser usada em outros arquivos do projeto.
