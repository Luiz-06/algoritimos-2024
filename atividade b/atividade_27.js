import{question} from 'readline-sync'

//******************** 
    const seg=Number(question('Digite um numero em segundos: '))
    const horas=Math.floor(seg/3600)
    const min=Math.floor((seg%3600)/60)
    const seg_1=seg%60

//*********************
    console.log(`${seg} segundos equivale a ${horas} horas ${min} minutos e ${seg_1} segundos`)
