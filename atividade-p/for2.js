import { question } from "readline-sync";
function main() {
  const N = Number(question("Digite N: "));
  mostrar_numeros_impares(1, N);
}

function mostrar_numeros_impares(inicio, N) {
  for (let i = inicio; i <= N; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}
main();
