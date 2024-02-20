import {question} from 'readline-sync'

//Entrada
    console.log('****Area do retangulo****')

//Processamento
    const base=Number(question('Qual o valor da base do seu retangulo: '))
    const altura=Number(question('Qual o valor da altura do seu retangulo: '))
    const area=base*altura

//Saida
    console.log(`A area do seu retangulo equivale a: ${area}`)