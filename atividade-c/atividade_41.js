import { question } from "readline-sync";

//Entrada
    console.log('******Calculador de precos*********')

//Processamento
    const fab=Number(question('Qual o valor de fabrica do seu carro: '))
    const fab_1=fab*0.45
    const dis=fab_1*0.28
    const valor=fab+fab_1+dis

//Saida
    console.log(`O valor final que voce pagara é: ${valor}`)