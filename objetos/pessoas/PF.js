// Objetivo do exemplo: demonstrar conceitos de Herança, bem como encapsulamento adicionados de condicionais. Aplicar herança em JavaScript com validação de dados encapsulados.

// Objetivo do exemplo: demonstrar conceitos de Herança, encapsulamentos e relacionamentos 1 - 1 com a classe Titulo

const Pessoa = require('./Pessoa'); // Importa a classe base Pessoa (definida em Pessoa.js) para que possa ser estendida pela nova classe PF.

const Titulo = require('./Titulo'); // Importa a classe Titulo, utilizada para o relacionamento 1-1 com o objeto PF.

class PF extends Pessoa {   // Define a classe PF (Pessoa Física) como uma subclasse de Pessoa. Utiliza o comando extends para herdar atributos e métodos públicos da classe Pessoa. 
  
  #cpf;   // Cria um atributo privado #cpf, exclusivo da classe PF. Não é herdado, pois atributos privados não são acessíveis fora de sua própria definição.
  
  setCPF(cpf) {   // Define um setter com validação condicional: Verifica se o valor cpf é válido (não vazio ou nulo); Em caso positivo, atribui ao atributo privado e retorna true; Caso contrário, retorna false. Define o valor do CPF com validação de preenchimento (não pode ser vazio).  Aplica o princípio do encapsulamento, ocultando o dado.  
    if (cpf) {
      this.#cpf = cpf;
      return true;
    } else {
      return false;
    }
  }
  getCPF() {   // Método getter que retorna o valor armazenado no atributo privado #cpf. 
    return this.#cpf;
  
}

//    Relacionamento 1 - 1 com a classe Titulo: Comentário que sinaliza o início da implementação do relacionamento entre PF e Titulo.

#titulo;

setTitulo(titulo) {     // Verifica se o parâmetro é uma instância válida da classe Titulo. Atribui o título ao atributo privado #titulo. Estabelece a referência cruzada, permitindo que o objeto Titulo também tenha referência à instância de PF. 
  if (titulo instanceof Titulo) {
    this.#titulo = titulo;
    titulo.setPF(this); // referência cruzada
    return true;
  } else {
    return false;
  }
}

getTitulo() {     // Retorna o título associado à pessoa física.
  return this.#titulo;
}
}

module.exports = PF;   // Exporta a classe PF para ser utilizada em outros arquivos com require(). Exporta a classe PF para ser reutilizada em outros módulos, como usaPF.js.
