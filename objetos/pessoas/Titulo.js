class Titulo {      // Define a classe Titulo, representando um título de eleitor.
  
  #numero;
  #zona;
  #secao;     // Declara os atributos privados #numero, #zona e #secao.
  
  setNumero(numero) {     // Define o valor do atributo numero com validação.
    if (numero) {
      this.#numero = numero;
      return true;
    } else {
      return false;
    }
  }
  
  getNumero() {     // Retorna o valor do número do título.
    return this.#numero;
  }
  
  setZona(zona) {     // Define o valor do atributo zona eleitoral com validação.
    if (zona) {
      this.#zona = zona;
      return true;
    } else {
      return false;
    }
  }
  
  getZona() {     // Retorna o valor da zona eleitoral do título.
    return this.#zona;
  }
  
  setSecao(secao) {     // Define o valor do atributo seção eleitoral com validação.
    if (secao) {
      this.#secao = secao;
      return true;
    } else {
      return false;
    }
  }
  
  getSecao() {      // // Retorna o valor da seção eleitoral do título.
    return this.#secao;
  }

  // Relacionamento 1 para 1 com a classe PF
  #pf;
  
  setPF(pf) {     // Atribui a uma variável privada um objeto da classe PF, estabelecendo o relacionamento.
    if (pf) {
      this.#pf = pf;
      return true;
    } else {
      return false;
    }
  }
  
  getPF() {     // Retorna a instância da classe PF associada a este título.
    return this.#pf;
  }
}

module.exports = Titulo;      // Exporta a classe Titulo para ser utilizada em outros módulos do projeto, como na classe PF.
