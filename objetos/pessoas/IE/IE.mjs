// 🧾 IE.mjs (ESM):  
// 01: Requer Node com "type": "module" ou extensão .mjs. Indica o nome e tipo do arquivo (ESM – ECMAScript Module).
// 02: Ajuste o caminho/forma de import do PJ conforme seu projeto: Explica que o uso de ESM exige configuração no package.json ou extensão .mjs.
import PJ from "../PJ.js";      // 03: se seu PJ for CommonJS, use: import PJpkg from "../PJ.js"; const PJ = PJpkg.default ?? PJpkg; Ajuste o caminho/forma de import do PJ conforme seu projeto: Comentário que orienta o ajuste de importação de módulos. Importa a classe PJ (Pessoa Jurídica).

// 04: Classe IEclss
export class IEclss {     // Declaração da classe IEclss e exportação nomeada.

  #numero;      // número da inscrição estadual
  #estado;      // UF 
  #dataRegistro;      // data de registro
  #pj;      // objeto do tipo PJ

  setNumero(numero) { if (numero) { this.#numero = numero; return true; } return false; }     // 10: Define o número da IE, se não for nulo. Retorna true se bem-sucedido.
  getNumero() { return this.#numero; }      // 11: Retorna o número da IE.

  setEstado(estado) { if (estado) { this.#estado = estado; return true; } return false; }     // 13: Define a sigla do estado (UF). Retorna true se válido.
  getEstado() { return this.#estado; }      // 14: Retorna a UF.

  setDataRegistro(dataregistro) { if (dataregistro instanceof Date) { this.#dataRegistro = dataregistro; return true; } return false; }     // 16: Verifica se o valor é um Date. Se for, define a data de registro e retorna true.
  getDataRegistro() { return this.#dataRegistro; }      // 17: Retorna a data de registro da IE

  setPJ(pj) { if (pj instanceof PJ) { this.#pj = pj; return true; } return false; }     // 19: Verifica se o valor é uma instância de PJ. Associa o objeto PJ à IE, se válido.
  getPJ() { return this.#pj; }      // 20: Retorna o objeto PJ associado.
}

// 23: Factory function
export default function IEfunc() {      // Exporta uma função default que retorna um objeto manipulador.
  let dados = { numero: null, estado: null, dataRegistro: null, pj: null };     // 25: Declara o objeto dados que armazenará as propriedades numero, estado, dataRegistro e pj.

  function setNumero(numero) { if (numero) { dados.numero = numero; return true; } return false; }      // 27: Atribui o número à propriedade se válido.
  function getNumero() { return dados.numero; }     // 28: Retorna o número da IE.

  function setEstado(estado) { if (estado) { dados.estado = estado; return true; } return false; }      // 30: Atribui a UF à propriedade se válido.
  function getEstado() { return dados.estado; }     // 31: Retorna a UF.

  function setDataRegistro(data) { if (data instanceof Date) { dados.dataRegistro = data; return true; } return false; }      // 33:  Atribui a data se for um objeto Date.
  function getDataRegistro() { return dados.dataRegistro; }     // 34: Retorna a data de registro.

  function setPJ(pj) { if (pj instanceof PJ || (pj && pj.cnpj)) { dados.pj = pj; return true; } return false; }     // 36: Verifica se é instanceof PJ ou um objeto com propriedade cnpj.Se sim, atribui o PJ ao objeto.
  function getPJ() { return dados.pj; }     // 37:Retorna o objeto PJ associado.

  return { setNumero, getNumero, setEstado, getEstado, setDataRegistro, getDataRegistro, setPJ, getPJ };      // 39: Retorna um objeto com os métodos definidos acima.
}

// 42: Objeto JSON (Objeto JSON Exportado)
export const IEjson = {     // Cria um objeto IEjson exportado com atributos e métodos.
  numero: null,     // Inicializa atributos: numero, estado, dataRegistro, pj.
  estado: null,
  dataRegistro: null,
  pj: null,

  setNumero(numero) { if (numero) { this.numero = numero; return true; } return false; },     // 49:  Define numero, se válido.
  getNumero() { return this.numero; },      // 50: Retorna numero.

  setEstado(estado) { if (estado) { this.estado = estado; return true; } return false; },     // 52: Define estado, se válido.
  getEstado() { return this.estado; },      // 53: Retorna estado.

  setDataRegistro(data) { if (data instanceof Date) { this.dataRegistro = data; return true; } return false; },     // 55: Define dataRegistro se for uma instância de Date.
  getDataRegistro() { return this.dataRegistro; },      // 56: Retorna dataRegistro.

  setPJ(pj) { if (pj instanceof PJ || (pj && pj.cnpj)) { this.pj = pj; return true; } return false; },      // 58: Define pj se for instância de PJ ou tiver um atributo cnpj.
  getPJ() { return this.pj; }     // 59: Retorna pj.
};      // Finaliza o objeto JSON.
