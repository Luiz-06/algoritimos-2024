import { question } from "readline-sync";
function main() {
  const N = Number(question("Digite N: "));
  const { media, soma } = MostrarMedia(N);
  console.log(`Média e soma dos valores da lista: ${media} e ${soma}`);
}

function MostrarMedia(N) {
  let soma = 0;
  let qtdNumeros = 0;
  for (let i = 0; i < N; i++) {
    let digitoLista = Number(question("Digite um numero: "));
    soma += digitoLista;
    qtdNumeros += 1;
  }
  const media = soma / qtdNumeros;
  return { media, soma };
}
main();
