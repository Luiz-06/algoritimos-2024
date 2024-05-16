import { question } from 'readline-sync';

//Entrada
console.log('Bem vindo ao conversor de dolar para real')

//Processamento
var dolar=Number(question('Qual o valor em real do dolar americano: '))
var dolares=Number(question('Quantos dolares voce deseja converter: '))
var reais_1=dolar*dolares

//Saida
console.log(`${dolares} dolares equivale a ${reais_1.toFixed(2)} reais`)