import { question } from "readline-sync";

//Entrada
    console.log('****Dias para anos****')

//Processamento
    const dias=Number(question('Digite sua idade em dias: '))
    const anos=Math.floor(dias/365)
    const resto=dias%365
    const meses=Math.floor(resto/30)
    const dias_1=resto%30

//Saida
    console.log(`${dias} dias equivale a ${anos} anos ${meses} meses e ${dias_1} dias`)