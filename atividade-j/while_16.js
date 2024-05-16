import { question } from "readline-sync";

function main() {
  const emprestimo = Number(question("Qual o valor do emprestimo? "));
  const juros = Number(question("Qual o valor do juros? "));
  const pagamneto_diario = Number(question("Quanto sera pago por dia? "));
  const juros_porcent = juros / 100;
  let saldo = emprestimo;
  let dias_uteis = 0;

  while (saldo > 0) {
    saldo *= 1 + juros_porcent;
    saldo -= pagamneto_diario;
    if (saldo > 0) {
      dias_uteis++;
    }
  }

  console.log(`Voce pagara sua conta em ${dias_uteis} dias`);
}
main();
