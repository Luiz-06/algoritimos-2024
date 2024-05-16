import{question} from 'readline-sync'

//Entrada
    console.log('**** Dias para semanas****')

//Processamento
    const dias=Number(question('Digite o numero de dias: '))
    const semanas=Math.floor(dias/7)
    const dias_1=dias%7

//Saida
    console.log(`${dias} dias equivale a ${semanas} semanas e ${dias_1} dias`)