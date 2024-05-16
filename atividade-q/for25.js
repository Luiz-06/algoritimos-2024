import { question } from "readline-sync";
function main() {
  const qtd_eleitores = pedirNumero("Quantidade de eleitores: ");
  const { votos1, votos2, votos3, votosNulo, votosBranco } =
    computandoVotos(qtd_eleitores);

  const dadosEleicao = `
    Candidato 1: ${votos1}
    Candidato 2: ${votos2}
    Candidato 3: ${votos3}
    Votos Nulo: ${votosNulo}
    Votos em Branco: ${votosBranco}
    `;

  console.log(dadosEleicao);

  vencedor(votos1, votos2, votos3, votosNulo, votosNulo);
}

function vencedor(x, y, z) {
  if (x > y && x > z) {
    console.log("Candidato 1 venceu");
  } else if (y > x && y > z) {
    console.log("Candidato 2 venceu");
  } else if (z > y && z > x) {
    console.log("Candidato 3 venceu");
  }
}

function computandoVotos(qtd_eleitores) {
  let votos1 = 0;
  let votos2 = 0;
  let votos3 = 0;
  let votosBranco = 0;
  let votosNulo = 0;

  for (let i = 0; i < qtd_eleitores; i++) {
    let voto = pedirNumero("Voto: ");
    if (voto === 1) {
      votos1++;
    }
    if (voto === 2) {
      votos2++;
    }
    if (voto === 3) {
      votos3++;
    }
    if (voto === 9) {
      votosNulo++;
    }
    if (voto === 0) {
      votosBranco++;
    }
  }
  return { votos1, votos2, votos3, votosBranco, votosNulo };
}

function pedirNumero(mensagem) {
  return Number(question(mensagem));
}
main();
