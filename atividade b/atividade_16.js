import{question} from 'readline-sync'

//Entrada
    console.log('******Area do quadrado******')

//Processamento
    const lado=Number(question('Quanto vale o lado do quadrado: '))
    const area=lado**2

//Saida
    console.log(`A area do quadrado é igual a: ${area}`)