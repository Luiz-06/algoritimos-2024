import { question } from "readline-sync";
function main() {
  let sexo = { masculino: 0, feminino: 0 };
  let qtd_sexo = { masculino: 0, feminino: 0 };
  let estado_civil = { casado: 0, solteiro: 0, divorciado: 0, viuvo: 0 };
  let qtd_estado_civil = { casado: 0, solteiro: 0, divorciado: 0, viuvo: 0 };
  let idade;
  let total_idade_mulheres = 0;
  let total_idade_homens = 0;
  let total_entrevistados = 0;
  let contdor = 0;
  let total_homensSolteiros = 0;
  let total_mulheresSolteiros = 0;
  sexo = Number(question("Sexo : "));
  idade = Number(question("Idade : "));
  estado_civil = Number(question("Estado civil : "));
}
//IMCOMPLETA
