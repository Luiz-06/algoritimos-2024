import { question } from "readline-sync";

//Entrada
    console.log('******Minutos para Dias*******')

//Processamento
    const min=Number(question('Digite um valor em minutos: '))
    const dias=Math.floor(min/1440)
    const horas=Math.floor((min%1440)/60)
    const min_1=((min%1440)%60)

//Saida
    console.log(`${min} minutos equivale a ${dias} dias ${horas} horas e ${min_1} minutos`)