import {question} from 'readline-sync'

//Entrada
    console.log('Bem vindo aluno')

//Processamento
    const nota_1=Number(question('Digite sua primeira nota: '))
    const peso_1=Number(question('Digite o peso da primeira nota: '))
    const nota_2=Number(question('Digite a segunda nota: '))
    const peso_2=Number(question('Digite o peso da segunda nota: '))
    const nota_3=Number(question('Digite a terceira nota: '))
    const peso_3=Number(question('Digte o peso da terceira nota: '))
    const divisor =nota_1*peso_1+nota_2*peso_2+nota_3+peso_3
    const dividendo=peso_1+peso_2+peso_3
    const media=divisor/dividendo
    
//Saida
    console.log(`${media}`)