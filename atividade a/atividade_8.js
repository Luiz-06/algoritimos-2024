import {question} from 'readline-sync'

//Entrada
    const n1=Number(question('Escreva o primeiro numero: '))
    const n2=Number(question('Escreva um segundo numero: '))

//Processamento
    const div= n1+n2/n1-n2

//Saida
    console.log(`${div.toFixed(2)}`)