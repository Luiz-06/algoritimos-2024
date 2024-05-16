import { question } from "readline-sync";

function main() {
  mostre_ao_usuario("Frigorifico");
  mostre_ao_usuario("-----------");

  let boi_mais_magro = { idt: 0, peso: Infinity };
  let boi_mais_gordo = { idt: 0, peso: -Infinity };

  while (true) {
    let idt = pedir_dado_numerico("Numero de identificacao: ");
    if (idt === 0) {
      break;
    }

    let peso = pedir_dado_numerico("Peso do animal: ");

    if (peso < boi_mais_magro.peso) {
      boi_mais_magro.peso = peso;
      boi_mais_magro.idt = idt;
    }
    if (peso > boi_mais_gordo.peso) {
      boi_mais_gordo.peso = peso;
      boi_mais_gordo.idt = idt;
    }
  }

  mostre_ao_usuario("-----------------------------------------");
  mostre_ao_usuario(`N° do boi mais magro: ${boi_mais_magro.idt}`);
  mostre_ao_usuario(`Peso do boi mais magro: ${boi_mais_magro.peso}`);
  mostre_ao_usuario("-----------------------------------------");
  mostre_ao_usuario(`N° do boi mais gordo: ${boi_mais_gordo.idt}`);
  mostre_ao_usuario(`Peso do boi mais gordo: ${boi_mais_gordo.peso}`);
  mostre_ao_usuario("-----------------------------------------");
}

function mostre_ao_usuario(mensagem) {
  return console.log(mensagem);
}
function pedir_dado_numerico(mensagem) {
  return Number(question(mensagem));
}
function pedir_dado(mensagem) {
  return question(mensagem);
}

main();
