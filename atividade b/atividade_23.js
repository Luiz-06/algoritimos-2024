import{question} from 'readline-sync'

//Entrada
    console.log('*******Kg para G*******')

//Processamento
    const Kg=Number(question('Digite um valor em Kg: '))
    const g= Kg*1000

//Saida
    console.log(`${Kg} kg equivale a ${g} g`)