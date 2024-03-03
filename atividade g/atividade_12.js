import { question } from "readline-sync"

function main(){

    const numero=Number(question('Digite um numero: '))
    const inteiro=Math.floor(numero)
if(numero-inteiro===0){
    console.log('Numero inteiro')
}else{
    console.log('Numero decimal')
}







}
main()