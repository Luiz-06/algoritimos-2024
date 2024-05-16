import { question } from "readline-sync";

const A=Number(question('1)Digite um numero: '))
const B=Number(question('2)Digite um numero: '))
const C=Number(question('3)Digite um numero: '))
const opcao=Number(question('Qual opcao voce escolhe: '))

if(opcao<=3&&opcao>=1){

    console.log('Opcao valida')
    if(opcao===1){
        console.log(`${A}`)
    }else if(opcao===2){
        console.log(`${B}`)
    }else if(opcao===3){
        console.log(`${C}`)
    }

}else{
    console.log('Essa opcao nao existe')
}