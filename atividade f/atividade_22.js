import { question } from "readline-sync";

function atividade(){


    console.log('******MARCAR PARTIDA*******')
    console.log('1=sim')
    console.log('2=não')
    const DATA=Number(question('Sua partida ira durar ate o dia seguinte? '))
        
    
    
    console.log('****HORA DO INCIO DO JOGO****')
    const inicio=Number(question('Hora de incio do jogo: '))
       
        if(inicio>=0&&inicio<=24){
            const incio_m=Number(question('Minuto de incio do jogo: '))
        
        if(incio_m>=0&&incio_m<=60){
            console.log('****HORA DO FINAL DO JOGO****')
            const final=Number(question('Hora do final do jogo: '))
       
        if(final>=0&&final<=24){
            const final_m=Number(question('Minuto do final do jogo: '))   
        
        if(final_m>=0&&final_m<=60){
            console.log('HORARIO VALIDO')
            console.log('****DURAÇÃO DO JOGO****')
       
         if(DATA===1){
            const X=24-inicio
            const hora_total=X+final
            console.log(`A duração do seu jogo é de ${hora_total} horas`)
        
        }else if(DATA===2){
            const hora_total_1=final-inicio
            console.log(`A duração do seu jogo é de ${hora_total_1} horas`)
        }
        
        
        
        
        }else{
            console.log('MINUTO INVALIDO')
        }
        }else{
            console.log('HORA INVALIDA')
        }
        }else{
            console.log('MINUTO INVALIDO')
        }
         }else{
            console.log('HORA INVALIDA')
        }

    
    
    
    









    
    







}

atividade()