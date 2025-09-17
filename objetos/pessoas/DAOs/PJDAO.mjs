// 01 // localStorage Simulado. localStorage e sessionStorage não funcionam no Node.js puro, somente através do Browser
// 02 // classe construída dentro da pasta "/pessoas/DAOs/PJDAO.mjs"

import { localStorage } from './localStorage.mjs'; // 03 // Importa a simulação de localStorage
import PJ from '../PJ.js';                          // 04 // Importa a classe PJ (Pessoa Jurídica)

export default class PJDAO {                        // 05 // Declara classe PJDAO que será exportada como default

  #pj;                                              // 06 // Atributo privado que armazena a instância de PJ

  constructor(pj) {                                 // 07 // Construtor da classe PJDAO
    if (pj instanceof PJ) {                         // 08 // Verifica se o objeto passado é uma instância de PJ
      this.#pj = pj;                                // 09 // Atribui ao atributo privado
    }
  }

  toJSON() {                                        // 10 // Constrói uma representação em JSON da instância de PJ
    let fones = [];                                 // 11 // Cria array para armazenar os telefones

    for (let fone of this.#pj.getTelefones()) {     // 12 // Itera sobre os telefones associados à PJ
      fones.push({                                  // 13 // Adiciona ao array um objeto com DDD e número
        ddd: fone.getDdd(),
        numero: fone.getNumero(),
      });
    }

    return {                                        // 17 // Retorna objeto literal que representa todos os dados relevantes da PJ
      nome: this.#pj.getNome(),
      email: this.#pj.getEmail(),
      cnpj: this.#pj.getCNPJ(),
      endereco: {
        logradouro: this.#pj.getEndereco().getLogradouro(),
        cep: this.#pj.getEndereco().getCep(),
      },
      telefone: fones,
      ie: {
        numero: this.#pj.getIE().getNumero(),
        estado: this.#pj.getIE().getEstado(),
        dataRegsitro: this.#pj.getIE().getDataRegistro(),
      }
    };
  }

  saveJSON() {                                      // 30 // Método para salvar o objeto PJ em formato JSON no localStorage
    // transforma em string JSON usando stringify() e armazena
    localStorage.setItem("pj", JSON.stringify(this.toJSON())); // 32
  }

  recoveryJSON() {                                  // 34 // Método para recuperar os dados de PJ armazenados
    // recupera a string armazenada e transforma em JSON usando parse()
    return JSON.parse(localStorage.getItem("pj"));  // 36
  }

}                                                   // 38 // Fim da classe
