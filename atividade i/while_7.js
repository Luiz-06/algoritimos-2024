import { question } from "readline-sync";

function main(){
        let x=Number(question('Digite o primeiro numero: '))
        let n
        while(true){
            let n=Number(question('Digite um numero: '))
        if(n===x){
            break
        }
        }
            console.log('Numero encontrado')



}
main()