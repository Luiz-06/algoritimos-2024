import { question } from "readline-sync";

function main() {
  let primeiro_termo = Number(question("Primeiro termo da PA: "));
  let qtd_termos = Number(question("Quantos termos tera a PA: "));
  let razao = Number(question("Razao da PA: "));
  let resultado = primeiro_termo;
  let contador = 0;

  while (contador < qtd_termos) {
    resultado = resultado + razao;
    contador++;
    console.log(resultado);
  }
}
main();
