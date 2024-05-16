import { question } from "readline-sync";
function main() {
  const limite_inferior = Number(question("Limite Inferior: "));
  const limite_superior = Number(question("Limite Superior: "));
  mostrarPrimos(limite_inferior, limite_superior);
}

function mostrarPrimos(x, y) {
  for (let primos = x; primos <= y; primos++) {}
}
main();
//NAO CONSEGUI
