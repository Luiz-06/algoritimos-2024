import { question } from "readline-sync";

//Entrada
    console.log('******Distancia entre dois pontos********')

//Processamento
    const x1=Number(question('Digite x1: '))
    const y1=Number(question('Digite y1: '))
    const x2=Number(question('Digite x2: '))
    const y2=Number(question('Digite y2: '))
    const d= Math.sqrt((x2-x1)**2 + (y2-y1)**2)

//Saida
    console.log(`A distancia entre os pontos é: ${d.toFixed(2)}`)