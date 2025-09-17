// Forma 1: Atribuição direta na declaração (valores mistos). Cria um array com valores de tipos diferentes: string, number e boolean. Exibe o array completo e depois um elemento específico (dadosAluno[0] → 'João').
let dadosAluno = ['João', 12345, true];
console.log('dadosAluno:', dadosAluno);
console.log('dadosAluno:', dadosAluno[0]);

// Forma 2: Criando array vazio e atribuindo por índice. Array iniciado vazio. Elementos são adicionados individualmente por índice. Acesso também é feito por índice (curso[1] → 2025).
let curso = [];
curso[0] = 'Análise de Sistemas';
curso[1] = 2025;
curso[2] = false;
console.log('curso:', curso);
console.log('curso:', curso[1]);

// Forma 3: Usando o construtor Array(). Criação com o construtor Array(), equivalente ao uso de colchetes.Armazena somente números (notas).
let notas = new Array(7.5, 8.0, 6.9);
console.log('notas:', notas);

// Forma 4: Atribuição de múltiplos tipos diretamente com array literal. Similar à Forma 1, mas com mais elementos. Mostra como arrays podem conter qualquer tipo misturado: string, number, boolean.
let infoSistema = ['Ativo', 3.2, false, 'Finalizado'];
console.log('infoSistema:', infoSistema);

// Forma 5: Atualizando valores em um array existente. Substituição de valores em índices específicos de um array já criado. Mostra como arrays são mutáveis.
infoSistema[0] = 'Inativo';
infoSistema[2] = true;
console.log('infoSistema atualizado:', infoSistema);

// Forma 6: Array com tipos uniformes (booleans). Criação de array com tipos homogêneos (booleans). Acesso ao valor de índice específico (status[3] → true).
let status = [true, false, true, true];
console.log('status:', status);
console.log('Status:', status[3]);

// Forma 7: Array com strings (nomes de cursos). Lista de strings representando nomes de cursos. Exemplo de uso comum de arrays com valores homogêneos (string).
let cursos = ['ADS', 'SI', 'Engenharia', 'Jogos'];
console.log('cursos:', cursos);
