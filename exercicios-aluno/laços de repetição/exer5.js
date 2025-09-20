const senhaCorreta = "1234";
let tentativa;

do {
  tentativa = prompt("Digite a senha:");
} while (tentativa !== senhaCorreta);

console.log("✅ Senha correta! Acesso permitido.");
