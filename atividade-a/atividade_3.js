import { question } from 'readline-sync'

//Entrada 
console.log('Bem vindo ao conversor de horas e minutos')

//Processamento
var minutos=Number(question('Escreva um valor em minutos: '))
var horas=Math.floor(minutos/60)
var minutos_1=minutos%60

//Saida
console.log(`${minutos} minutos equivale a ${horas} horas e ${minutos_1} minutos `)