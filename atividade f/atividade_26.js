import { question } from "readline-sync";

function main(){

    const A=Number(question('Digite o primeiro lado do triangulo: '))
    const B=Number(question('Digite o segundo lado: '))
    const C=Number(question('Digite o terceiro lado: '))

if(A+B>C&&A+C>B&&C+B>A){
    console.log('TRIANGULO VALIDO')
    console.log(`${A} é hipotenusa`)
    console.log(`${B} é cateto`)
    console.log(`${C} é cateto`)










}else{
    console.log('TRIANGULO INVALIDO')
}



}

main()