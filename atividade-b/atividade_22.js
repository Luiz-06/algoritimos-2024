import{question} from 'readline-sync'

//Entrada
    console.log('******Km para M*******')

//Processamento
    const Km=Number(question('Digite um valor em Km: '))
    const M=Km*1000

//Saida
    console.log(`${Km} Km equivale a ${M} m`)