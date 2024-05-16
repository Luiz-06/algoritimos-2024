import { question } from "readline-sync";

function main(){

    console.log('Bem vindo usuario')
    const senha=Number(question('Digite sua senha: '))

if(senha===1234){
    console.log('SENHA CORRETA')
}else{
    console.log('SENHA INCORRETA')
}





}

main()