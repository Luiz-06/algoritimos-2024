import {question} from 'readline-sync'

//Entrada
    console.log('****** M para Cm******')

//Processamento
    const M=Number(question('Digite o valor em metros: '))
    const cm=M*100

//Saida
    console.log(`${M} metros equivale a ${cm} cm`)