import { question } from "readline-sync";

//Entrada
    console.log('*****LATAO*****')

//Processamento
    const latao=Number(question('Quandos kg de latao voce deseja: '))
    const cobre=latao*0.70
    const zinco=latao*0.30

//Saida
    console.log(`Para se ter ${latao} kilos de latao, sera preciso ter ${cobre} kilos de cobre e ${zinco} kilos de zinco`)