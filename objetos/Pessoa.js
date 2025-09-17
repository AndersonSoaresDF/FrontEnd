// Informativo sobre o nome, localização e observação de que o arquivo não deve ser executado diretamente com node, pois se destina à exportação de classe.

class Pessoa {   // Declara uma classe chamada Pessoa. Classes são estruturas que permitem criar objetos com propriedades e métodos associados, promovendo organização e reuso.
  
  constructor(peso, altura) {   // Método especial de toda classe. É executado automaticamente quando a classe é instanciada com new Pessoa(...). Recebe dois parâmetros: peso e altura. 
    this.peso = peso;
    this.altura = altura;   // Atribui os valores recebidos aos atributos internos (propriedades) do objeto Pessoa criado. this faz referência ao objeto atual da classe.
  }
  imc() {  // índice de massa corpórea. Define um método da classe chamado imc, que calcula o Índice de Massa Corporal.
    let imc = this.peso / (this.altura * this.altura);   // Executa o cálculo do IMC: Fórmula: peso ÷ (altura × altura). Utiliza this.peso e this.altura para acessar os atributos da instância atual.
    return imc;   // Retorna o resultado do cálculo.
  }
}

module.exports = Pessoa;   // Exporta a classe Pessoa como um módulo, permitindo que ela seja importada em outros arquivos usando require('./objetos/Pessoa').

