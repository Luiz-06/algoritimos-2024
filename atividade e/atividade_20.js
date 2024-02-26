import { question } from "readline-sync";

function atividade(){

    const angulo=Number(question('Digite o valor de um angulo: '))
    if(angulo>=1&&angulo<=360){
        console.log('Angulo valido')
    if(angulo<=90){
        console.log('O angulo descrito pertence ao 1° quadrante')
    }
    if(angulo>90&&angulo<=180){
        console.log('O angulo descrito pertence ao 2° quadrante')
    }
    if(angulo>180&&angulo<=270){
        console.log('O angulo descrito pertence ao 3° quadrante')
    }
    if(angulo>270&&angulo<=360){
        console.log('O angulo descrito pertence ao 4° quadrante')
    }
    
    
    
    
    
    
    
    
    }else{
        console.log('Angulo invalido')
    }








}

atividade()