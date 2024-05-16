import { question } from "readline-sync"

function main(){

    const dia=Number(question('Digite um numero que corresponde a um dia da semana: '))

if(dia>0&&dia<=7){
    console.log('Dia valido')
if(dia===1){
    console.log('DOMINGO')
}else if(dia===2){
    console.log('SEGUNDA')
}else if(dia===3){
    console.log('TERCA')
}else if(dia===4){
    console.log('QUARTA')
}else if(dia===5){
    console.log('QUINTA')
}else if(dia===6){
    console.log('SEXTA')
}else if(dia===7){
    console.log('SABADO')
}









}else{
    console.log('Dia invalido')
}






}
main()