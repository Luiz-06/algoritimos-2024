import { question } from 'readline-sync';
console.log('Conversor de horas para minutos')

//Inicio 
var horas=Number(question('Que horas sao: '))
 
//Meio
var minutos= horas*60

//Fim
console.log(`${horas} horas equivale a ${minutos} minutos`)
