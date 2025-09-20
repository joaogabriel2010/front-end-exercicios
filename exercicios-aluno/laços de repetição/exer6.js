let maior = Number.NEGATIVE_INFINITY;

for (let i = 1; i <= 5; i++) {
  let entrada = parseFloat(prompt(`Digite o ${i}º número:`));

  if (!isNaN(entrada)) {
    if (entrada > maior) {
      maior = entrada;
    }
  } else {
    console.log("Entrada inválida. Por favor, insira um número.");
    i--; // repete a mesma rodada
  }
}

console.log(`🔝 O maior número digitado foi: ${maior}`);
