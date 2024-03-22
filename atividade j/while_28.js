import { question } from "readline-sync";

function main() {
  let ate_onde = Number(question("Limite de numeros: "));
  let numero_aleatorio = (Math.random() * ate_onde + 0).toFixed(0);
  let tentativas = 0;
  let chute;
  while (chute !== numero_aleatorio) {
    chute = Number(question("Escolha um numero: "));
    if (chute > numero_aleatorio) {
      console.log("O numero sorteado é menor");
      tentativas++;
    } else if (chute < numero_aleatorio) {
      console.log("O numero sorteado é maior");
      tentativas++;
    } else {
      tentativas++;
      break;
    }
  }
  console.log("Numero encontrado");
  tentativas > 1
    ? console.log(`Voce conseguiu em ${tentativas} tentativas`)
    : console.log(`Voce conseguiu em ${tentativas} tentativa`);
}
main();
