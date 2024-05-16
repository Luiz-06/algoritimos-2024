import { question } from "readline-sync";
function main() {
  const N = Number(question("Digite N: "));
  mostrarMaior(N);
}

function mostrarMaior(N) {
  let Maior_numero = -Infinity;
  for (let i = 0; i < N; i++) {
    let digito = Number(question("Digite um numero: "));

    if (digito > Maior_numero) {
      Maior_numero = digito;
    }
  }
  console.log(`O maior numero da lista é ${Maior_numero}`);
}
main();
