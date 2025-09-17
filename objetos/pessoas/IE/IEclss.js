// 01 // Inscrição Estadual - IE
// 02 // clss - Estrutura de Classe
// 03 // classe construída dentro da pasta "/pessoas/IE"

const PJ = require('../PJ');               // 04 // Importa a classe PJ (Pessoa Jurídica)

class IE {                                 // 05 // Declara a classe IE (Inscrição Estadual)
  #numero;                                 // 06 // Atributo privado para o número da IE
  #estado;                                 // 07 // Atributo privado para o estado da IE
  #dataRegistro;                           // 08 // Atributo privado para a data de registro da IE

  setNumero(numero){                      // 09 // Método para atribuir o número da IE
    if(numero){                           // 10 // Validação: número não pode ser vazio
      this.#numero = numero;              // 11 // Atribuição do valor ao atributo privado
      return true;                        // 12 // Retorna sucesso
    }else{                                // 13
      return false;                       // 14 // Retorna falha
    }
  } 
  getNumero(){                            // 15 // Retorna o número da IE
    return this.#numero;                  // 16
  }
  
  setEstado(estado){                      // 17 // Método para atribuir o estado
    if(estado){                           // 18 // Validação: estado não pode ser vazio
      this.#estado = estado;              // 19
      return true;                        // 20
    }else{                                // 21
      return false;                       // 22
    }
  } 
  getEstado(){                            // 23
    return this.#estado;                  // 24
  }

  setDataRegistro(dataregistro){          // 25 // Define a data de registro (sem verificação de tipo aqui)
    if(dataregistro){                     // 26
      this.#dataRegistro = dataregistro;  // 27
      return true;                        // 28
    }else{                                // 29
      return false;                       // 30
    }
  } 
  getDataRegistro(){                      // 31
    return this.#dataRegistro;            // 32
  }

  #pj;                                    // 33 // Atributo privado que representa o vínculo com um objeto PJ

  setPJ(pj){                              // 34 // Associa um objeto PJ à IE
    if(pj){                               // 35 // Validação: objeto não pode ser vazio
      this.#pj = pj;                      // 36
      return true;                        // 37
    }else{                                // 38
      return false;                       // 39
    }
  }
  getPJ(){                                // 40
    return this.#pj;                      // 41 // Retorna o objeto PJ associado
  }

} module.exports = IE;                    // 42 // Exporta a classe para uso externo (CommonJS)
