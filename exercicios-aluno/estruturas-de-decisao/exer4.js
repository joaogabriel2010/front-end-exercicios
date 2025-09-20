// Valor do salário mínimo (atualizado para 2025)
const salarioMinimo = 1412;

// Captura de dados do usuário
let idade = Number(prompt("Digite sua idade:"));
let renda = Number(prompt("Digite sua renda mensal:"));

// Verificação de aptidão
if (idade >= 18 && rendaMensal >= 2000 * salarioMinimo) {
  console.log("Você está apto para realizar um consórcio.");
} 

else {
  console.log("Você NÃO está apto para realizar um consórcio.");
}

if ( idade >= 18 ) {
    if ( renda >= 3036 ) {
        console.log()
    }
}

else {
    console.log('Infelizmente você não tem idade');
}