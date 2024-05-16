import {question} from 'readline-sync'

//Entrada
    console.log('***** M para Km******')

//Processamento
    const M=Number(question('Digite um valor em metros: '))
    const Km=M/1000

//Saida
    console.log(`${M} metros equivale a ${Km} Km`)