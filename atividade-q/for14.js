import { question } from "readline-sync";
function main() {
  const N = Number(question("Digite N: "));
  mostrarQuadrado(N);
}

function mostrarQuadrado(n) {
  let maiorValor = -Infinity;
  for (let i = 1; i ** 2 <= n; i++) {
    if (i > maiorValor) {
      maiorValor = i;
    }
  }
  console.log(
    `O maior quadrado menor que N é ${
      maiorValor ** 2
    } que corresponde ao quadrado de ${maiorValor}`
  );
}
main();
