import { question } from "readline-sync";
function main() {
  const qtdFuncionarios = pedirNumero("Quantos funcionarios serao avaliados? ");

  for (let i = 0; i < qtdFuncionarios; i++) {
    const codigoFuncionario = pedirNumero("Codigo do funcionario: ");
    const horasTrabalhadas = pedirNumero("Horas trabalhadas: ");
    const qtdDependentes = pedirNumero("Quantidade de dependentes: ");

    const { salarioLiquido, descontoInss, descontoIr } = calcularDescontos(
      horasTrabalhadas,
      qtdDependentes
    );

    const valoresAo_funcionario = `
    Desconto do INSS: ${descontoInss.toFixed(2)} R$
    Desconto do IR: ${descontoIr.toFixed(2)} R$
    Salario Liquido: ${salarioLiquido.toFixed(2)} R$
    __________________________
    `;

    console.log(valoresAo_funcionario);
  }
}

function pedirNumero(x) {
  return Number(question(x));
}

function calcularDescontos(horasTrabalhadas, qtdDependentes) {
  const valorPor_hora = 12;
  const valorPor_dependente = 40;
  const salarioBruto =
    horasTrabalhadas * valorPor_hora + qtdDependentes * valorPor_dependente;

  const descontoInss = salarioBruto * 0.085;
  const descontoIr = salarioBruto * 0.05;

  const salarioLiquido = salarioBruto - descontoInss - descontoIr;

  return { salarioLiquido, descontoInss, descontoIr };
}
main();
