import { question } from "readline-sync";

//Entrada
    console.log('*******Meses para Anos********')

//Processamento
    const meses=Number(question('Digite quantos meses voce deseja converter: '))
    const anos=Math.floor(meses/12)
    const mes=meses%12

//Saida
    console.log(`${meses} meses representa ${anos} anos e ${mes} meses`)