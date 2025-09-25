//.- 1-3 horas por dia = amarelo
//- 3 Horas ou mais por dia = vermelho

let usoDiasDaSemana = [1, 2 , 2,4, 5, 1.2, 0.5, 12]; // Domingo, Segunda..
let diasDaSemana = ['Domingo', 'Segunda', 'Terça'];

// Determinar se o uso do dia é verde, amarelo ou vermelho
const indicadorDeUso = (numeroDeHoras) => {
   if (numeroDeHoras <= 1 ) {
    return '🟢'
 } else if (numeroDeHoras <= 3 ) {
    return '🟡';
 } else {
    return '🔴'
 }   
}

for(let contador = 0; contador <= 6 ; contador++) {
let farol = indicadorDeUso(usoDiasDaSemana[contador]);
let dia = diasDaSemana[contador];
let horas = usoDeDiasdaSemana[contador];
//let mensagem = 'hora de uso';

//if ( horas > 1 ) {
// mensagem = 'horas de uso';
// }
let

console.log('$(farol) $(dia) $(horas)
}
console.log('Domingo:' + indicadorDeUso(usoDiasDaSemana[0]);
console.log('Segunda' + indicadorDeUso(usoDiasDaSemana[1]);
console.log('Terça' + indicadorDeUso(usoDiasDaSemana[2]);
console.log('Quarta' + indicadorDe(UsoDiasDaSemana[3]);

console.log(typeof usoDiasDaSemana); //
console.log(typeof usoDiasDaSemana(0)); // number
console.log(typeof indicadorDeUso); //function

usoDiasDaSemana