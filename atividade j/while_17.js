import { question } from "readline-sync";

function main() {
  let mais_alta = { nome: "", altura: -Infinity };
  let mais_baixa = { nome: "", altura: Infinity };
  let mais_magra = { nome: "", peso: Infinity };
  let mais_gorda = { nome: "", peso: -Infinity };

  console.log("Concurso de Beleza");

  while (true) {
    let nome = question("Nome: ");
    if (nome === "FIM" || nome === "fim" || nome === "Fim") {
      break;
    }

    let altura = Number(question("Altura: "));
    let peso = Number(question("Peso: "));

    if (altura < mais_baixa.altura) {
      mais_baixa.nome = nome;
      mais_baixa.altura = altura;
    }
    if (altura > mais_alta.altura) {
      mais_alta.nome = nome;
      mais_alta.altura = altura;
    }

    if (peso < mais_magra.peso) {
      mais_magra.nome = nome;
      mais_magra.peso = peso;
    }
    if (peso > mais_gorda.peso) {
      mais_gorda.nome = nome;
      mais_gorda.peso = peso;
    }
  }

  console.log(
    `Candidata mais alta: ${mais_alta.nome} com ${mais_alta.altura} m`
  );
  console.log(
    `Candidata mais baixa: ${mais_baixa.nome} com ${mais_baixa.altura} m`
  );
  console.log(
    `Candidata mais gorda: ${mais_gorda.nome} com ${mais_gorda.peso} kg`
  );
  console.log(
    `Candidata mais magra: ${mais_magra.nome} com ${mais_magra.peso} kg`
  );
}
main();
