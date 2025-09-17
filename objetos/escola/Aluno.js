// Objetivo pedagógico: demonstrar encapsulamento e visibilidade de membros da classe

class Aluno {   // Declara uma classe chamada Aluno. Uma classe é uma estrutura que representa objetos com propriedades (atributos) e comportamentos (métodos).
  #matricula;   // atributo privado. Declara dois atributos privados, usando o prefixo #, uma sintaxe do ES2022+. Esses atributos só podem ser acessados dentro da própria classe.
  #curso;   // atributo privado.
  escola;   // atributo público. Atributo público, ou seja, pode ser acessado diretamente do lado de fora da classe (objeto.escola).

  setMatricula(matricula) {   
    this.#matricula = matricula;   // Define um método setter público para modificar o valor do atributo privado #matricula.
  }
  getMatricula() {
    return this.#matricula;   // Define um método getter público para acessar o valor de #matricula.
  }
  setCurso(curso) {
    this.#curso = curso;   // Define um setter para o atributo #curso.
  }
  getCurso() {
    return this.#curso;   // Define um getter para o atributo #curso.
  }
}
module.exports = Aluno;   // Exporta a classe Aluno como um módulo, permitindo que seja importada em outros arquivos com require().