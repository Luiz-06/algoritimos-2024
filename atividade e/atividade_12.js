import { question } from "readline-sync";

const A=Number(question('Digite um numero: '))

if (A%2!=0){
    console.log('Esse numero é impar')
}else {
    console.log('Esse numero é par')
}