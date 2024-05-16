import { question } from "readline-sync";

function main(){

    while(true){
        let n=Number(question('Digite um numero: '))
     if(n===0){
        break
     }
        let divisor=n
    while(divisor>0){
     if(n%divisor===0){
        console.log(divisor)
     }
        divisor--
    }
    }
    
}
main()