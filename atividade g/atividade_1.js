import { question } from "readline-sync"

function main(){

const numero=Number(question('Digite um numero: '))
 
    if(numero>0){
        console.log('O numero é positivo')
    }else if(numero===0){
        console.log('Valor nulo')
    }else{
        console.log('O numero é negativo')
    }





}

main()