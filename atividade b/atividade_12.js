import {question} from 'readline-sync'

//Entrada
    console.log('Bem vindo CLT')

//Processamento
    const salario=Number(question('Digite seu salario atual: '))
    const n_salario=salario*1.25

//Saida
    console.log(`Seu novo salario é de: ${n_salario}`)