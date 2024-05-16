 import{question} from 'readline-sync'

 //Entrada
    console.log('******Idade para dias*******')

//Processamento
    const anos=Number(question('Digite sua idade em anos: '))
    const meses=Number(question('Meses: '))
    const dias=Number(question('Dias: '))
    const anos_1=anos*365
    const meses_1=meses*30
    const dias_1=anos_1+meses_1+dias

//Saida
    console.log(`Sua idade em dias é: ${dias_1}`)
