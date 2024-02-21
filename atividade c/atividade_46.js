import { question } from "readline-sync";

//Entrada
    console.log('******Sistema de Parcelas*******')

//Processamento
    const valor=Number(question('Digite o valor do produto: '))
    const entrada=Math.floor(valor/3)
    