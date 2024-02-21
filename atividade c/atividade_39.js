import { question } from "readline-sync";

//Entrada
    console.log('Leitor de Numeros')

//Processamento
    const A=Number(question('Digite o numero A: '))
    const B=Number(question('Digite o numero B: '))
    const C=Number(question('Digite o numero C: '))
    const R=(A+B)**2
    const S=(B+C)**2
    const D=(R+S)/2

//Saida
    console.log(`R=${R};S=${S};D=${D}`)