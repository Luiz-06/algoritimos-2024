import { question } from "readline-sync"

function main(){

    const nota_1=Number(question('Nota 1: '))
if(nota_1>=0&&nota_1<=10){
    const nota_2=Number(question('Nota 2: '))
if(nota_2>=0&&nota_2<=10){
    const media=(nota_1+nota_2)/2
if(media>=6){
    console.log('APROVADO')
if(media>=6&&media<7.5){
    console.log('C')
}else if(media>=7.5&&media<9){
    console.log('B')
}else if(media>=9&&media<=10){
    console.log('A')
}
}else{
    console.log('REPROVADO')
if(media>=0&&media<4){
    console.log('E')
}else if(media>=4&&media<6){
    console.log('D')
}
}







}else{
    console.log('Nota invaida')
}
}else{
    console.log('Nota invalida')
}







}
main()