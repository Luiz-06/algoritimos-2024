import { question } from "readline-sync";

function main(){
    
        let n1=Number(question('Digite N1: '))
        let n2=Number(question('Digite N2: '))
        while (n2 !== 0) {
            let r = n2
            n2 = n1 % n2
            n1 = r
        }

        console.log(`MDC: ${n1}`)
    
        
        
    
    
    

}
main()