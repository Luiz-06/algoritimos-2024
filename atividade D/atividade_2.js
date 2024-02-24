import { question } from "readline-sync";

function main(){
const A=Number(question('Digite um numero: '))
const B=Number(question('Digite um segundo nunmero: '))


if (A===B){
    console.log(`${A}=${B}`)
}
else if(A>B){
    console.log(`${A}>${B}`)
}else{
    console.log(`${B}>${A}`)
}



}

main()