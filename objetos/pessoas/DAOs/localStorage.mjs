// 01 // Classe que simula o localStorage no Node.js do Stackblitz
// 02 // Definida na pasta "/pessoas/DAOs/localStorage.mjs"

export const localStorage = {                    // 03 // Exporta um objeto constante chamado 'localStorage'

  store: {},                                     // 04 // Objeto interno que funciona como "banco de dados" em memória

  setItem(key, value) {                          // 05 // Simula a função localStorage.setItem()
    this.store[key] = value;                     // 06 // Armazena o valor associado à chave informada
  },

  getItem(key) {                                 // 07 // Simula a função localStorage.getItem()
    return this.store[key] || null;              // 08 // Retorna o valor ou null, caso a chave não exista
  },

  removeItem(key) {                              // 09 // Simula a função localStorage.removeItem()
    delete this.store[key];                      // 10 // Remove a chave do armazenamento
  },

  clear() {                                      // 11 // Simula a função localStorage.clear()
    this.store = {};                             // 12 // Limpa todos os dados armazenados
  }

};                                               // 13 // Fim do objeto exportado
