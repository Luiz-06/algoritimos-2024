import{question}from 'readline-sync'

//Entrada
    console.log('*****Calculador de media******')

//Processamento
    const val1=Number(question('Digite o primeiro numero: '))
    const val2=Number(question('Digite o segundo valor: '))
    const val3=Number(question('Digite o terceiro valor: '))
    const media=val1+val2+val3/3

//Saida
    console.log(`A media dos valores informados é: ${media.toFixed(2)}`)