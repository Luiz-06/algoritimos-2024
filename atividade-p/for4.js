import { question } from "readline-sync";

function main() {
  let fatorial = Number(question("Digite um numero fatorial: "));
  numero_fatorial(fatorial);
}

function numero_fatorial(fatorial) {
  for (let i = fatorial - 1; i > 1; i--) {
    fatorial = fatorial * i;
  }
  console.log(fatorial);
}

main();
