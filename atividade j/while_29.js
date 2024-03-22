import { question } from "readline-sync";
function main() {
  const nome = question("Ola, digite seu nome: ");
  let valor_inicial = Number(question("Valor investido: "));
  let taxa = Number(question("De quanto sera a taxa: "));
  let total = 0;
  let meses = 0;

  while (meses < 12) {
    valor_inicial *= 1 + taxa;
    total += valor_inicial;
    meses++;
  }
  console.log(`Ola ${nome}, o seu montante é de ${total.toFixed(2)}`);
}
//ERRADAAAAAAAAAAAAAAAAAAAAAA

main();
