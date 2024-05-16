import { question } from "readline-sync";

function main() {
  while (true) {
    let numero = Number(question("Digite um numero: "));
    if (numero === 0) {
      break;
    }
    let vezes = Number(question("Numero vezes quanto? "));
    let qtd_soma = 0;
    let resultado = 0;

    while (qtd_soma < vezes) {
      resultado = resultado + numero;
      qtd_soma++;
    }
    console.log(resultado);
  }
}
main();
