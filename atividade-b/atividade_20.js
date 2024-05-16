import {question} from'readline-sync'

//Entrada
    console.log('*****Convertor de temperatura******')

//Processamento
    const c=Number(question('Qual a temperatura atual(Celsius): '))
    const f=(c*9/5)+32

//Saida
    console.log(`A temperatura em Fahrenheit equivale a: ${f} `)