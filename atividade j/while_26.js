import { question } from "readline-sync";

function main() {
  let idade;
  let opiniao;
  let total = 0;
  let total_idade = 0;
  let qtd_opniao = { um: 0, dois: 0, tres: 0, quatro: 0 };
  let totalIdade = { um: 0, dois: 0, tres: 0, quatro: 0 };

  while (true) {
    idade = Number(question("Qual sua idade: "));
    if (idade === -1) {
      break;
    } else {
      opiniao = Number(question("Qual sua opiniao sobre o filme: "));
    }
    if (opiniao !== 1 && opiniao !== 2 && opiniao !== 3 && opiniao !== 4) {
      console.log("Numero invalido");
    } else {
      if (opiniao === 1) {
        qtd_opniao.um++;
        total++;
        total_idade += idade;
        totalIdade.um += idade;
      } else if (opiniao === 2) {
        qtd_opniao.dois++;
        total++;
        total_idade += idade;
        totalIdade.dois += idade;
      } else if (opiniao === 3) {
        qtd_opniao.tres++;
        total++;
        total_idade += idade;
        totalIdade.tres += idade;
      } else if (opiniao === 4) {
        qtd_opniao.quatro++;
        total++;
        total_idade += idade;
        totalIdade.quatro += idade;
      }
    }
  }
  let media_otimo = totalIdade.um / qtd_opniao.um;
  console.log(
    "_______________________________________________________________"
  );
  console.log(`Total de pessoas que responderam a pesquisa: ${total}`);
  console.log(`Quantas pessoas acharam o filme ótimo: ${qtd_opniao.um}`);
  console.log(`Quantas pessoas acharam o filme bom: ${qtd_opniao.dois}`);
  console.log(`Quantas pessoas acharam o filme regular: ${qtd_opniao.tres}`);
  console.log(`Quantas pessoas acharam o filme péssimo: ${qtd_opniao.quatro}`);
  console.log(
    "________________________________________________________________"
  );
  console.log(`Media de idade das que responderam ótimo: ${media_otimo}`);
}

main();
