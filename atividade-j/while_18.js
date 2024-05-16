import { question } from "readline-sync";

function main() {
  const populacao_a = Number(question("Populacao A: "));
  const taxa_a = Number(question("Taxa de crescimento A: "));
  const populacao_b = Number(question("Populcao B:  "));
  const taxa_b = Number(question("Taxa de crescimento B: "));
  const taxa_a_percent = taxa_a / 100;
  const taxa_b_percent = taxa_b / 100;
  let populacao_A = populacao_a;
  let populacao_B = populacao_b;
  let anos_necessarios = 0;

  while (populacao_A < populacao_B) {
    populacao_A *= 1 + taxa_a_percent;
    populacao_B *= 1 + taxa_b_percent;
    anos_necessarios++;
  }

  console.log(
    `Para que a cidade A supere a cidade B serao necessarios ${anos_necessarios} anos`
  );
}
main();
