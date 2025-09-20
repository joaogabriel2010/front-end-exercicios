// Calcula pontuação por formação
let pontosFormacao = 0;

switch (formacao.toLowerCase()) {
  case "superior":
    pontosFormacao = 10;
    break;
  case "pos":
  case "pós-graduação":
    pontosFormacao = 20;
    break;
  case "mestrado":
    pontosFormacao = 30;
    break;
  case "doutorado":
    pontosFormacao = 40;
    break;
  default:
    console.log("Formação não reconhecida. Pontuação de formação será 0.");
}

// Soma total de pontos
let pontuacaoTotal = pontosExperiencia + pontosFormacao;

// Exibe resultado
console.log("Pontuação total do candidato:", pontuacaoTotal);