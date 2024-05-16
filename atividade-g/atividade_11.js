import { question } from "readline-sync"

function main(){

    const numero=Number(question('Digite um numero: '))
if(numero>0&&numero<1000){
    console.log('Numero valido')
    const C=Math.floor(numero/100)
    const resto=numero%100
    const D=Math.floor(resto/10)
    const U=resto%10
if(numero>99){
    console.log(`${numero}=>${C} centenas,${D} dezenas e ${U} unidades`)
}else if(numero<=99){
    console.log(`${numero}=>${D} dezenas e ${U} unidades`)
}    



}else{
    console.log('Numero invalido')
}





}
main()