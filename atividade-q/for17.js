import { question } from "readline-sync";
function main() {
  const N = pedirNumero("Digite N: ");
  const S = calcularS(N);

  console.log(`Valor de S: ${S}`);
}

function pedirNumero(mensagem) {
  return Number(question(mensagem));
}

function calcularS(N) {
  let S = 0;
  for (let i = 1; i <= N; i++) {
    S += 1 / i;
  }
  return S;
}
main();
