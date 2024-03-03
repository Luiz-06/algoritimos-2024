import { question } from "readline-sync"

function main(){

    const nota_1=Number(question('Nota 1: '))
    const nota_2=Number(question('Nota 2: '))
    const media=(nota_1+nota_2)/2

if(media>=7&&media<=9){
    console.log('APROVADO')
}if(media===10){
    console.log('Aprovado com Distinção')
}else if(media<7){
    console.log('REPROVADO')
}







}
main()