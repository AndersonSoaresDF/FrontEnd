// ‘node ./objetos/usaPF.js'.

// Importação das classes auxiliares: Telefone, Endereco e Titulo, todos vindos da pasta /pessoas.
const Telefone = require('./pessoas/Telefone');
const Endereco = require('./pessoas/Endereco');
const Titulo = require('./pessoas/Titulo');

// Importa a classe PF (Pessoa Física), que estende Pessoa e se relaciona com as demais.
const PF = require('./pessoas/PF');

// Cria instâncias de Endereco e dois objetos Telefone.
const end = new Endereco();
const fone1 = new Telefone();
const fone2 = new Telefone();

// Define os valores para: Logradouro do endereço (QNM 40). Números dos dois telefones.
end.setLogradouro('QNM 40');
fone1.setNumero('1234-5678');
fone2.setNumero('1255-5578');

// Cria e configura uma instância da classe Titulo, com número e seção.
const titulo = new Titulo();
titulo.setNumero('1234156');
titulo.setZona('005')
titulo.setSecao('DF');

// Criação de uma instância de PF (Pessoa Física), chamada obj. Associa-se a ela: Um nome: "José". Um endereço (end). Dois telefones (fone1 e fone2). Um título de eleitor (titulo). Cada set e add realiza validação e mantém a integridade das relações.
const obj = new PF();
obj.setNome('José');
obj.setEndereco(end);       // vincula Endereco a PF
obj.addTelefone(fone1);     // vincula Telefone a PF
obj.addTelefone(fone2);     // vincula outro Telefone a PF
obj.setTitulo(titulo);      // vincula Titulo a PF

// Impressão dos seguintes dados: Nome da pessoa (José). Logradouro do endereço. Lista de telefones. Número do título associado.
console.log(obj.getNome());
console.log(obj.getEndereco().getLogradouro());
console.log(obj.getTelefones());
console.log(obj.getTitulo().getNumero());
console.log("Zona:", obj.getTitulo().getZona());
console.log("Seção:", obj.getTitulo().getSecao());

// Verificando as referências cruzadas. Impressão das referências cruzadas: getPessoas() de Endereco e Telefone retorna a lista de objetos PF que os utilizam. getPF() de Titulo retorna o objeto PF associado e o método getNome() exibe seu nome.
console.log(end.getPessoas());
console.log(fone1.getPessoas());
console.log(titulo.getPF().getNome());
