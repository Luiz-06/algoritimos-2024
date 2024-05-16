import { question } from "readline-sync";

function atividade(){

    const A=Number(question('Digite um numero: '))
    const B=Number(question('Digite um segundo numero: '))
    console.log('1=adição')
    console.log('2=subtração')       
    console.log('3=multplicação')    
    console.log('4=divisão')
    const operacao=Number(question('Escreva a operacao que deseja realizar: '))

if(operacao>=1&&operacao<=4){
    console.log('operação valida')
if(operacao===1){
    console.log(A+B)
}
if(operacao===2){
    console.log(A-B)
}
if(operacao===3){
    console.log(A*B)
}
if(operacao===4){
    console.log(A/B)
}


}else{
    console.log('operação invalida')
}












}

atividade()