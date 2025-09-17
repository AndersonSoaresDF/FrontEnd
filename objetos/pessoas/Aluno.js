//     Objetivo do exemplo: demonstrar conceitos de Herança, bem como encapsulamento adicionados de condicionais utilizando operadores lógicos. Comentário explicativo que define o propósito do código: herdar de PF e aplicar validações lógicas nos atributos.

const PF = require('./PF');     // Importa a classe PF (Pessoa Física), que por sua vez herda da classe base Pessoa.
class Aluno extends PF {        // Cria a classe Aluno, que herda atributos e métodos de PF, mantendo acesso a métodos como setNome(), setEmail() e setCPF().
  #matricula;
  #curso;
  
  setMatricula(matricula) {       // Define o método setMatricula() com validação composta usando operador lógico &&: O valor precisa ter exatamente 8 caracteres e começar com "20", como por exemplo: "20231234".Caso contrário, retorna false.
    if (matricula) {
      if ((matricula.length === 8) && (matricula.startsWith("20")))              {
      this.#matricula = matricula;
      return true;
    } else {
      return false;
      }
    } else {
      return false;
    }
  }
  getMatricula() {        // Getter para o atributo encapsulado #matricula.
    return this.#matricula;
  }
  setCurso(curso) {       // Método setCurso() com validação usando operador lógico ||: O curso só será aceito se for "ADS" ou "SI". Exemplo de uso comum de operadores lógicos em decisões compostas.
    if (curso) {
      if ((curso === 'ADS') || (curso === 'SI')) {
      this.#curso = curso;
      return true;
    } else {
      return false;
      }
    } else {
      return false;
    }
  }
  getCurso() {        // Retorna o valor armazenado em #curso.
    return this.#curso;
  }
}
module.exports = Aluno;       // Exporta a classe Aluno como um módulo, permitindo seu uso em outros arquivos via require().


