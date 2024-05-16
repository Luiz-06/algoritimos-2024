import { question } from "readline-sync";

function main(){



const hora_a=Number(question('Quantas horas o professor A trabalha: '))
const valor_a=Number(question('E quanto ele recebe por hora: '))
const hora_b=Number(question('Quantas horas o professor B trabalha: '))
const valor_b=Number(question('E quanto o mesmo recebe por hora: '))

    if(hora_a*valor_a>hora_b*valor_b){
        console.log('O professor A ganha mais')
    }else{
        console.log('O professor B ganha mais')
    }




}

main()