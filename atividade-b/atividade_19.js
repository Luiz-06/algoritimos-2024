import {question} from 'readline-sync'

//Entrada
    console.log('*****Volume da esfera******')

//Processamento
    const raio=Number(question('Qual o valor do raio de sua esfera: '))
    const volume=4*Math.PI*raio**3/3

//Saida
    console.log(`O volume da respectiva esfera é de: ${volume.toFixed(2)}`)