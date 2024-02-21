import { question } from "readline-sync";

//Entrada
    console.log('*****Leitor de sistemas*****')

//Processamento
    const a=Number(question('A: '))
    const b=Number(question('B: '))
    const c=Number(question('C: '))
    const d=Number(question('D: '))
    const e=Number(question('E: '))
    const f=Number(question('F: '))
    const x=(c*e)-(b*f)/(a*e)-(b*d)
    const y=(a*f)-(c*d)/(a*e)-(b*d)

//Saida
    console.log(`X e Y sao respectivamente: ${x} e ${y}`)
