import { question } from "readline-sync";

function main() {
  const N = Number(question("Digite N: "));
  apresentar_numeros(1, N);
}

function apresentar_numeros(inicio, N) {
  for (let i = inicio; i <= N; i++) {
    console.log(i);
  }
}

main();
