let n = parseInt(prompt("Digite um número máximo:"));

if (!isNaN(n) && n >= 1) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
} else {
  console.log("Por favor, insira um número válido maior ou igual a 1.");
}
