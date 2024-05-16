import { question } from "readline-sync";

function main() {
  console.log(">>>>>Fazenda<<<<<");
  const N = Number(question("Quantidade de bois na fazenda: "));
  const {
    boiMais_magro,
    boiMais_gordo,
    n_identificacaoGordo,
    n_identificacaoMagro,
  } = computarDados(N);

  const dados = `
  Peso do boi mais magro: ${boiMais_magro} kg
  N° de identificacao do boi mais magro: ${n_identificacaoMagro}
  ______________________________________________________________
  Peso do boi mais gordo: ${boiMais_gordo} kg
  N° de identificacao do boi mais gordo: ${n_identificacaoGordo}
  `;

  console.log(dados);
}

function computarDados(n) {
  let boiMais_gordo = -Infinity;
  let boiMais_magro = Infinity;
  let n_identificacaoMagro = 0;
  let n_identificacaoGordo = 0;

  for (let i = 0; i < n; i++) {
    let n_identificacao = Number(question("Numero de identificacao: "));
    let peso = Number(question("Peso: "));

    if (peso > boiMais_gordo) {
      n_identificacaoGordo = n_identificacao;
      boiMais_gordo = peso;
    }
    if (peso < boiMais_magro) {
      n_identificacaoMagro = n_identificacao;
      boiMais_magro = peso;
    }
  }
  return {
    boiMais_gordo,
    boiMais_magro,
    n_identificacaoGordo,
    n_identificacaoMagro,
  };
}
main();
