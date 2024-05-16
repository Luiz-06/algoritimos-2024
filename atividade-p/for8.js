import { question } from "readline-sync";
function main() {
  const N = Number(question("Digite N: "));
  const limite_inferior = Number(question("Limite inferior: "));
  const limite_superior = Number(question("Limite superior: "));
  mostrarMultiplosN(limite_inferior, limite_superior, N);
}

function mostrarMultiplosN(x, y, z) {
  for (let i = x; i <= y; i++) {
    if (i % z === 0) {
      console.log(i);
    }
  }
}
main();
