import { question } from "readline-sync";

function main() {
  console.log("ANALISE DE VOO");
  console.log("-----------------------------------------------");
  console.log("ANALISE DE CARGA");
  const n_container = Number(question("Digite a quantidade de containers: "));
  const peso_container = Number(question("Qual o peso de cada container: "));
  console.log("-----------------------------------------------");
  console.log("ANALISE DE PASSAGEIROS");
  let qtd_passageiros = 0;
  let volume_bagagem = 0;
  while (true) {
    let n_bilhete = Number(question("Numero do bilhete: "));
    if (n_bilhete === 0) {
      break;
    } else {
      let qtd_bagagem = Number(question("Quantidade de bagagem: "));
      qtd_passageiros++;
      volume_bagagem += qtd_bagagem;
    }
  }

  const peso_passageiros = qtd_passageiros * 70 + volume_bagagem * 10;
  const peso_carga = n_container * peso_container;
  const combustivel_kilos = 500000 - peso_passageiros - peso_carga;
  const combustivel_litros = combustivel_kilos / 1.5;
  console.log("---------------------------------------------------");
  console.log(`Quantidade de passageiros: ${qtd_passageiros}`);
  console.log(`Volume de bagagem: ${volume_bagagem} kg`);
  console.log(`Peso dos passageiros: ${peso_passageiros} kg`);
  console.log(`Peso da carga: ${peso_carga} kg`);
  console.log(
    `Quantidade possivel de combustivel: ${combustivel_litros.toFixed(
      2
    )} litros`
  );

  if (combustivel_litros < 1000) {
    console.log("NAO AUTORIZADO");
  } else if (combustivel_kilos + peso_carga + peso_passageiros > 500000) {
    console.log("NAO AUTORIZADO");
  } else {
    console.log("AUTORIZADO");
  }
}
main();
