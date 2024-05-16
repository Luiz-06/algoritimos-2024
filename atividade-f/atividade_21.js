import{question} from 'readline-sync'

function atividade(){

        const numero=Number(question('Digite um numero com parte fracionaria: '))
        const numero_arredondado=Math.round(numero)
        const parte_frac=numero_arredondado-numero

    if(parte_frac<=0.5){
        console.log(Math.round(numero))
    }else if(parte_frac>0.5){
        console.log(Math.floor(numero))
    }







}


atividade()