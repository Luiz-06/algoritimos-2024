import { question } from "readline-sync";

//Entrada
    console.log('***** Horario para Data*****')

//Processamento
    const horas=Number(question('Digite um valor em horas: '))
    const semanas=Math.floor(horas/168)
    const dias=Math.floor((horas%168)/24)
    const horas_1=((horas%168))%24

//Saida
    console.log(`${horas} horas equivale a ${semanas} semanas ${dias} dias e ${horas_1} horas`)