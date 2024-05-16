import { question } from "readline-sync";
function main() {
  const limite_inferior = Number(question("Limite Inferior: "));
  const limite_superior = Number(question("Limite Superior: "));
  mostrarImpares(limite_inferior, limite_superior);
}

function mostrarImpares(x, y) {
  for (let i = x; i <= y; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
main();
