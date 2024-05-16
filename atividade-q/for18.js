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
  let numerador = 1;
  for (let i = N; i >= 1; i--) {
    S += numerador / i;
    numerador++;
  }
  return S;
}
main();
