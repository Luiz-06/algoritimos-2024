import { question } from "readline-sync";

function main(){

    
        const numero=Number(question('Digite um numero: '))
        
        let div=numero/2
        
        while(div>=1){
        div=div/2
        }
        
        console.log(`Ultimo resultado: ${div}`)



}
main()