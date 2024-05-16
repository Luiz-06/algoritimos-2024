import { question } from "readline-sync";


function main(){

const A=Number(question('Digite um numero: '))
const B=Number(question('Digite um numero: '))
const C=Number(question('Digite um numero: '))
const D=Number(question('Digite um numero: '))
const E=Number(question('Digite um numero: '))
const media=(A+B+C+D+E)/5


if(A>media||B>media||C>media||D>media||E>media){
    console.log('Existem numeros que sao maiores que a media')
if(A>media){
    console.log(`${A}`)
}
if(B>media){
    console.log(`${B}`)
}
if(C>media){
    console.log(`${C}`)
}
if(D>media){
    console.log(`${D}`)
}
if(E>media){
    console.log(`${E}`)
}



}else{
    console.log('Nao existem numeros maiores que a media')
}
    






}

main()