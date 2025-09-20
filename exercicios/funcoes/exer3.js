function menorValor(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a < b ? a : b;
  } else {
    return "Erro: ambos os valores devem ser numéricos.";
  }
}

// Exemplos de uso:
console.log(menorValor(10, 5));        // 5
console.log(menorValor(3.2, 7.8));     // 3.2
console.log(menorValor("10", 5));      // Erro
console.log(menorValor(true, 2));      // Erro

