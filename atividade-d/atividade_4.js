import { question } from "readline-sync";

function main(){
    const numero=Number(question('Digite um numero: '))
    const D=Math.floor(numero/10)
    const U=numero%10
if(numero<=9){
    console.log('Numero invalido')
}else if(numero>99){
    console.log('Numero Invalido')
} else if(D===U){
    console.log('O algarismo das dezenas e unidades são iguais ')
 }else {
    console.log('O algarismo das dezenas e unidades são diferentes')
 }
}




main()