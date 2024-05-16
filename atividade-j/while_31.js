import { question } from "readline-sync";
function main() {
  let romano = "";
  const decimal = Number(
    question("Digite um numero decimal de ate 3 digitos: ")
  );
  while (decimal > 999) {
    const decimal = Number(
      question("Digite um numero decimal de ate 3 digitos: ")
    );
    if (decimal < 999) {
      break;
    }
  }
  const C = Math.floor(decimal / 100);
  const resto = decimal % 100;
  const D = Math.floor(resto / 10);
  const U = resto % 10;
  //NAO CONSEGUI
  console.log(`O numero ${decimal} em romano é ${romano}`);
}
main();
