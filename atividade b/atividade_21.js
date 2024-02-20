import {question} from 'readline-sync'

//Entrada
    console.log('*****Convertor de temperatura******')

//Processamento
    const f=Number(question('Qual a temperatura atual (Fahrenheit): '))
    const c=(5*f-160)/9

//Saida
    console.log(`A sua temperatura equivalente em Celsius é de: ${c}`)