// 01 // código construído na pasta "/pessoas/usaPJDAO.mjs"

import PJ from './PJ.js';                      // 02 // Importa a classe Pessoa Jurídica
import PJDAO from './DAOs/PJDAO.mjs';          // 03 // Importa a DAO que manipula objetos PJ

import Endereco from './Endereco.js';        // 04 // Importa a classe Endereco
import Telefone from './Telefone.js';          // 05 // Importa a classe Telefone
import IE from './IE/IEclss.js';                // 06 // Importa a classe Inscrição Estadual (IE)

// ========== Criação do objeto PJ ==========

const pj = new PJ();                                   // 08 // Cria instância de Pessoa Jurídica
pj.setNome("Pedro");                                   // 09 // Define o nome
pj.setEmail("pedro@ifb.edu.br");                       // 10 // Define o e-mail com validação
pj.setCNPJ("1234567890/0001-99");                      // 11 // Define o CNPJ com validação mínima de tamanho

// ========== Endereço ==========

const end = new Endereco();                            // 13 // Cria objeto endereço
end.setLogradouro("QNM 40");                           // 14 // Define logradouro
end.setCep("12345-678");                               // 15 // Define CEP
pj.setEndereco(end);                                   // 16 // Associa endereço à pessoa jurídica

// ========== Telefones ==========

const fone = new Telefone();                           // 18
fone.setDdd("61");                                     // 19 // Define DDD
fone.setNumero("99999-8888");                          // 20 // Define número
pj.addTelefone(fone);                                  // 21 // Adiciona telefone ao array da PJ

const fone2 = new Telefone();                          // 23
fone2.setDdd("62");                                     // 24
fone2.setNumero("99999-7777");                          // 25
pj.addTelefone(fone2);                                  // 26

// ========== Inscrição Estadual ==========

const ie = new IE();                                    // 28
ie.setNumero('123456');                                 // 29 // Define número da IE
ie.setEstado('SP');                                     // 30 // Define estado
ie.setDataRegistro(new Date());                         // 31 // Define a data de registro (hoje)
pj.setIE(ie);                                           // 32 // Associa a IE à PJ

// ========== DAO: Serialização, Salvamento e Leitura ==========

const pjdao = new PJDAO(pj);                            // 34 // Cria DAO passando o objeto PJ

var x = pjdao.toJSON();                                 // 36 // Gera o JSON do objeto
pjdao.saveJSON();                                       // 37 // Salva no "localStorage" simulado

console.log(x);                                         // 39 // Exibe o objeto JSON diretamente
console.log(JSON.stringify(x));                         // 40 // Exibe o objeto convertido em string JSON
console.log(pjdao.recoveryJSON());                      // 41 // Lê do localStorage e exibe a versão recuperada

