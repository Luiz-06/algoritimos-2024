import {question} from 'readline-sync'

//Entrada
    const numero=Number(question('Digite um numero de 3 digitos: '))

//Processamento
    const C = Math.floor(numero/100)
    const resto=numero%100
    const D = Math.floor(resto/10)
    const U= resto%10

//Saida
    console.log(`${U}${D}${C}`)