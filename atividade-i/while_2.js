import { question } from "readline-sync";

function main(){
    
        const n1=Number(question('Digite N1: '))
        const n2=Number(question('Digite N2: '))
        
        let mmc=1
    
    while(!(mmc%n1===0&&mmc%n2===0)){
        mmc++
    }
        
        console.log(`MMC: ${mmc}`)
    
    
    

    









}
main()