import { question } from "readline-sync";
function main() {
  const N = Number(question("Digite N:"));
  const soma = somaNumeros_ateN(N);
  console.log(soma);
}

function somaNumeros_ateN(x) {
  let soma = 0;
  for (let i = 1; i <= x; i++) {
    soma += i;
  }
  return soma;
}
main();
