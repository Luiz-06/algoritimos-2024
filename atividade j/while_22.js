import { question } from "readline-sync";

function main() {
  let dividendo = Number(question("Dividendo: "));
  let divisor = Number(question("Divisor: "));
  let qtd_divisoes = 0;
  let quoeficiente = dividendo;

  while (quoeficiente >= divisor) {
    quoeficiente = quoeficiente - divisor;
    qtd_divisoes += 1;
  }

  console.log(`Quoeficiente: ${qtd_divisoes}`);
}
main();
