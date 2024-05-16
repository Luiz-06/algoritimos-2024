import {question} from 'readline-sync'

//Entrada
    const n1=Number(question('Digite um numero: '))
    const n2=Number(question('Digite um segundo numero: '))

//Processamento
    const div= Math.floor(n1/n2)
    const resto=n1%n2

//Saida
    console.log(`O quociente e o resto da divião sao: ${div} e ${resto}`)