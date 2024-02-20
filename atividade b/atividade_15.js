import {question} from 'readline-sync'

//Entrada
    console.log('*******Area do triangulo********')

//Processamento
    const base=Number(question('Qual e a base do triangulo: '))
    const altura=Number(question('Qual a altura do triangulo: '))
    const area= base*altura/2

//Saida
    console.log(`A area do respectivo triangulo é igual a: ${area}`)