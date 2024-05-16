import { question } from "readline-sync";

function main(){
    
        let n=Number(question('Digite um numero: '))
        let qtd=0

        while(n!=0){
            n=Math.floor(n/10)
            qtd++
        }

        console.log(qtd)
       
}
main()