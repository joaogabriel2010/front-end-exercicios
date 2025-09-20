let contador = 0;

for (let i = 1; i <= 10; i++) {
  let numero = Number(prompt(`Digite o ${i}º número:`));
  if (numero > 50) {
    contador++;
  }
}

console.log(`Você digitou ${contador} número(s) maior(es) que 50.`);
