import { question } from "readline-sync";

function main(){

    const dia=Number(question('Digite o dia: '))
    
    if(dia>0&&dia<=31){
        const mes=Number(question('Digite o mes: '))
    if(mes>=1&&mes<=12){
        const ano=Number(question('Digite o ano: '))
    if(ano>0){
        console.log('Data valida')
    }else{
        console.log('Ano invalido')
    }
    
    }else{
        console.log('Mes invalido')
    }



    
    }else{
        console.log('Dia invalido')
    }
    
    



}
    main()