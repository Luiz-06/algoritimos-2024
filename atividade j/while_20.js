import { question } from "readline-sync";

function main() {
  const tanque_cheio = Number(
    question("Quando cheio,quantos litros o carro possui? ")
  );
  const distancia_total = Number(question("Quantos Km sera a viagem? "));
  let distancia_percorrida = 0;
  let combustivel_restante = tanque_cheio;
  let consumo = 0;

  while (distancia_percorrida < distancia_total && combustivel_restante > 0) {
    let distancia_medida = Math.random() * 600 + 0;
    let consumo_medido = Math.random() * 50 + 0;

    if (distancia_percorrida + distancia_medida >= distancia_total) {
      distancia_medida = distancia_total - distancia_percorrida;
    }

    if (combustivel_restante - consumo_medido <= 0) {
      consumo_medido = combustivel_restante;
    }

    distancia_percorrida += distancia_medida;
    combustivel_restante -= consumo_medido;
    consumo += consumo_medido;

    console.log(`Quanto percorreu: ${distancia_percorrida.toFixed(2)} km`);
    console.log(`Combustivel restante: ${combustivel_restante.toFixed(2)} L`);
  }

  if (distancia_percorrida >= distancia_total) {
    console.log("Chegou ao seu destino");
  } else {
    console.log("Nao conseguiu concluir o trajeto por falta de combustivel");
  }

  const consumo_medio = distancia_percorrida / consumo;
  console.log(
    `Consumo medio do carro em Km/l: ${consumo_medio.toFixed(2)} Km/L`
  );
  console.log(`Consumo Total: ${consumo.toFixed(2)} L`);
}
main();
