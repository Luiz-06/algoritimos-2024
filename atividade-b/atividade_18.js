import {question} from 'readline-sync'
 
//Entrada
    console.log('*****Comprimento da circunferencia*****')

//Processamento
    const raio=Number(question('Qual o valor do raio de sua circunferencia: '))
    const comprimento=2*Math.PI*raio

//Saida
    console.log(`O comprimento da circunferencia é igual a: ${comprimento.toFixed(2)}`)