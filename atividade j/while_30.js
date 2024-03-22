import { question } from "readline-sync";
function main() {
  let nome_produto;
  let qtd_produto;
  let preco;
  let deconto = "";
  let total_compras = 0;
  while (true) {
    nome_produto = question("Nome do produto: ");
    if (
      nome_produto === "FIM" ||
      nome_produto === "fim" ||
      nome_produto === "Fim"
    ) {
      break;
    } else {
      qtd_produto = Number(question("Quantidade do produto: "));
      preco = Number(question("Preco do produto: "));
      total_compras += qtd_produto;
    }
  }

  if (total_compras <= 10 && total_compras > 0) {
    deconto = "Voce pagara o valor total sem descontos";
  } else if (total_compras <= 20) {
    deconto = "Voce tera 10% de desconto na compra";
  } else if (total_compras <= 50) {
    deconto = "Voce tera 20% de desconto na compra";
  } else if (total_compras > 50) {
    deconto = "Voce tera 25% de desconto na compra";
  }
  console.log(deconto);
}

main();
