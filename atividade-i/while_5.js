import { question } from "readline-sync";

function main(){

    let x=Number(question('Digite x: '))
    let n=Number(question('Digite n: '))
    
    while(n>=2){
        let resultado=x/n
        console.log(Math.floor(resultado))
        x=resultado
        n--
    }
}
main()