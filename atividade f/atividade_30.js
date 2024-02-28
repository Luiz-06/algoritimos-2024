import { question } from "readline-sync";

function main(){

    console.log('Escreva um numero de 4 digitos')
    const numero=Number(question('Digite um numero: '))
    
if(numero>=1000&&numero<=9999){
    const M=Math.floor(numero/1000)
    const resto=numero%1000
    const C=Math.floor(resto/100)
    const resto_1=resto%100
    const D=Math.floor(resto_1/10)
    const U=resto_1%10
    const D_1=(M*10)+C
    const D_2=(D*10)+U

if((D_1+D_2)**2===numero){
    console.log('O número digitado obedece a sugestão')
}else{
    console.log('O número digitado não obedece a sugestão')
}





}else{
    console.log('Numero invalido')
}





}
main()