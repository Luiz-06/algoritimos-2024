import {question} from 'readline-sync'

//Entrada
console.log('Bem vindo ao conversor de velocidade')

//Processamento
const Km=Number(question('Digite a velocidade em Km: '))
const ms= Km/3.6

//Saida
console.log(`${Km} Km é igual a ${ms.toFixed(2)} metros por segundo`)