import {question} from 'readline-sync'

    const numero=Number(question('Digite um numero de 4 digitos: '))
    const M=Math.floor(numero/1000)
    const resto1=numero%1000
    const C=Math.floor(resto1/100)
    const resto2=resto1%100
    const D=Math.floor(resto2/10)
    const U=resto2%10
    const soma=M+C+D+U

console.log(`A soma dos algarismos de ${numero} é ${soma}`)

