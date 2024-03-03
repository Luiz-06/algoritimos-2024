import { question } from "readline-sync";

function main(){

    const sexo=question('Digite um letra: ')
    if (sexo==="F"||sexo==="f"){
        console.log('Feminino')
    }else if(sexo==="M"||sexo==="m"){
        console.log('Masculino')
    }else{
        console.log('Sexo invalido')
    }





}
main()