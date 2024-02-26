import { question, questionInt } from "readline-sync";

function main(){

    const nota_1=Number(question('Nota 1: '))
    const nota_2=Number(question('Nota 2: '))
    const media_1=(nota_1+nota_2)/2

    if(media_1<7){
     
    console.log('Sua nota nao é suficiente,faça um novo exame')

    const exame=Number(question('Nota exame: '))

    if((nota_1+nota_2+exame)/3>=5){
        console.log('APROVADO')
    }else{
        console.log('REPROVADO')
    }
    
    
    
    
    
    
    
    }else{
        console.log('APROVADO')
    }





}


main()