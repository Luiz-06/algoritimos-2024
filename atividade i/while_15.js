 import { question } from "readline-sync";

 function main(){
    
    while(true){
        let a =Number(question('Digite um numero (0 a 225): '))
    while(!(a>=0&&a<=225)){
        console.log('Numero invalido')
        let a =Number(question('Digite um numero (0 a 225): ')) 
    if(a>=0&&a<=225){
            break
    } 
    }
    
        const binario=a.toString(2)
        const hexadecimal=a.toString(16)

        console.log(`O numero decimal ${a} em binario é ${binario}`)
        console.log(`O numero decimal ${a} em hexadecimal é ${hexadecimal}`)
    
    }
        
    
      
    
    




 }
 main()