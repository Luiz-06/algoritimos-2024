import { question } from "readline-sync";

//Entrada
    console.log('****Bem vindo fumante******')

//Processamento
    const anos=Number(question('A quantos anos voce fuma: '))
    const dias=Number(question('E quantos cigarros voce fuma por dia: '))
    const preco=Number(question('Quando custa uma carteira de cigarro: '))
    const ciga_ano=dias*365
    const ciga_anos=ciga_ano*anos
    const carteira=ciga_anos/20
    const total=preco*carteira

//Saida
    console.log(`XIIII,pelo visto o seu total gasto é de: ${total} reais`)