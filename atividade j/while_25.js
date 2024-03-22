import { question } from "readline-sync";
function main() {
  let canal;
  let qtd_pessoas;
  let qtd_pessoas2 = 0;
  let qtd_pessoas4 = 0;
  let qtd_pessoas5 = 0;
  let qtd_pessoas7 = 0;
  let qtd_pessoas10 = 0;
  let total_pessoas = 0;
  let percent_2;
  let percent_4;
  let percent_5;
  let percent_7;
  let percen_10;

  console.log("PESQUISA DE AUDIENCIA");
  console.log("--------------------------------");
  console.log("CANAIS PRESENTES NA PESQUISA");
  console.log("2, 4, 5, 7, 10");
  while (true) {
    canal = Number(question("Canal de preferencia: "));
    if (canal === 0) {
      break;
    } else if (
      canal !== 2 &&
      canal !== 4 &&
      canal !== 5 &&
      canal !== 7 &&
      canal !== 10
    ) {
      console.log("Canal invalido");
    } else {
      qtd_pessoas = Number(
        question("Quantas pessoas assistem TV em sua casa: ")
      );
      if (canal === 2) {
        qtd_pessoas2 += qtd_pessoas;
        total_pessoas += qtd_pessoas;
      } else if (canal === 4) {
        qtd_pessoas4 += qtd_pessoas;
        total_pessoas += qtd_pessoas;
      } else if (canal === 5) {
        qtd_pessoas5 += qtd_pessoas;
        total_pessoas += qtd_pessoas;
      } else if (canal === 7) {
        qtd_pessoas7 += qtd_pessoas;
        total_pessoas += qtd_pessoas;
      } else if (canal === 10) {
        qtd_pessoas10 += qtd_pessoas;
        total_pessoas += qtd_pessoas;
      }
    }
  }

  percent_2 = (qtd_pessoas2 * 100) / total_pessoas;
  percent_4 = (qtd_pessoas4 * 100) / total_pessoas;
  percent_5 = (qtd_pessoas5 * 100) / total_pessoas;
  percent_7 = (qtd_pessoas7 * 100) / total_pessoas;
  percen_10 = (qtd_pessoas10 * 100) / total_pessoas;

  console.log(
    "_______________________________________________________________"
  );
  console.log(`Total de pessoas: ${total_pessoas}`);
  console.log(`Quantas pessoas assistem o canal 2: ${qtd_pessoas2}`);
  console.log(`Quantas pessoas assistem o canal 4: ${qtd_pessoas4}`);
  console.log(`Quantas pessoas assistem o canal 5: ${qtd_pessoas5}`);
  console.log(`Quantas pessoas assistem o canal 7: ${qtd_pessoas7}`);
  console.log(`Quantas pessoas assistem o canal 10: ${qtd_pessoas10}`);
  console.log(
    "________________________________________________________________"
  );
  console.log(`Porcentagem canal 2: ${percent_2.toFixed(0)}%`);
  console.log(`Porcentagem canal 4: ${percent_4.toFixed(0)}%`);
  console.log(`Porcentagem canal 5: ${percent_5.toFixed(0)}%`);
  console.log(`Porcentagem canal 7: ${percent_7.toFixed(0)}%`);
  console.log(`Porcentagem canal 10: ${percen_10.toFixed(0)}%`);
}
main();
