import { question } from "readline-sync";
function main() {
  const qtd_habitantes = pedirNumero(
    "Quantos habitantes participarao da pesquisa? "
  );

  const { mediaSalario, mediaNumero_deFilhos, percentAte_1000 } =
    pesquisa(qtd_habitantes);

  const dados = `
    Media salarial da populacao: ${mediaSalario.toFixed(2)} R$
    Media de numero de filhos: ${mediaNumero_deFilhos.toFixed(0)}
    Percentual de pessoas com salario ate 1000 R$: ${percentAte_1000.toFixed(
      2
    )} %
    `;

  console.log(dados);
}

function pesquisa(qtd_habitantes) {
  let totalSalario = 0;
  let totalFilhos = 0;
  let salarioAte1000 = 0;

  for (let i = 0; i < qtd_habitantes; i++) {
    let salario = pedirNumero("Salario: ");
    let quantidadeFilhos = pedirNumero("Quantidade de filhos: ");

    if (salario <= 1000) {
      salarioAte1000++;
    }

    totalFilhos += quantidadeFilhos;
    totalSalario += salario;
  }
  const mediaSalario = totalSalario / qtd_habitantes;
  const mediaNumero_deFilhos = totalFilhos / qtd_habitantes;
  const percentAte_1000 = (salarioAte1000 * 100) / qtd_habitantes;

  return { mediaSalario, mediaNumero_deFilhos, percentAte_1000 };
}

function pedirNumero(mensagem) {
  return Number(question(mensagem));
}
main();
