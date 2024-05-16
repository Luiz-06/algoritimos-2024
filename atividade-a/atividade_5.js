import { question } from 'readline-sync'

//Entrada
    const valor=Number(question('Digite um numero(ate 3 digitos): '))

//Processamento
    const C= Math.floor(valor/100)
    const resto=valor%100
    const D= Math.floor(resto/10)
    const U=resto%10
    const soma=C+D+U

//Saida
console.log(`${soma}`)