import { question } from "readline-sync";
function main() {
  const tabuada_desejada = Number(
    question("Qual tabuada voce deseja acessar (1 a 10): ")
  );
  mostrar_tabuada(tabuada_desejada);
}

function mostrar_tabuada(x) {
  if (x >= 1 && x <= 10) {
    console.log(tabuada(x));
  } else {
    console.log("Apenas de 1 a 10");
  }
}

function tabuada(x) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${x} x ${i} = ${x * i}`);
  }
}
main();
