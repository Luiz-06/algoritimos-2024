import { question } from "readline-sync";
function main() {
  const N = Number(question("Digite N: "));
  mostrar_Ntermos(N);
}

function mostrar_Ntermos(n) {
  let valor = 0;
  let incremento = 2;
  for (let i = 0; i < n; i++) {
    console.log(1 + valor);
    valor += incremento;
    incremento++;
  }
}
main();
