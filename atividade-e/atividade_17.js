import { question } from "readline-sync";

function main(){

const A=Number(question('Digite um valor: '))
const B=Number(question('Digite um segundo valor: '))

    if(A%B===1){
        console.log((A+B+1))
    }
   
    if(A%B===2){
        if(A%2===0){
            console.log(`${A} é par`)
        }else{
            console.log(`${A} é impar`)
        }
        if(B%2===0){
            console.log(`${B} é par`)
        }else{
            console.log(`${B} é impar`)
        }
    }
   
    if(A%B===3){
        console.log((A+B)*A)
    }

    if(A%B===4){
        console.log((A+B)/B)
    }

    if(A%B>=5){
        console.log(A**2)
        console.log(B**2)
    }



}

main()