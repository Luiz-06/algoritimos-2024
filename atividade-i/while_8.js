import { question } from "readline-sync";

function main(){

    const x=Number(question('Digite x: '))
    let soma=0
while(true){
    let n=Number(question('Digite n: '))
    soma+=n
if(soma===x){
    break
}
}
}
main()