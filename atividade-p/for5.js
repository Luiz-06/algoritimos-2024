import { question } from "readline-sync";
function main() {
  const A0 = Number(question("Inicio: "));
  const limite = Number(question("Limite: "));
  const razao = Number(question("Razao da PG: "));

  PG_ate_limite(A0, limite, razao);
}

function PG_ate_limite(A0, limite, razao) {
  for (let i = A0; i < limite; i *= razao) {
    console.log(i);
  }
}
main();
