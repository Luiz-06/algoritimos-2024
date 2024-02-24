import { question } from "readline-sync";

function main(){

    const A=Number(question('Digite o primeiro lado: '))
    const B=Number(question('Digite o segundoo lado: '))
    const C=Number(question('Digite o terceiro lado: '))
    
if(A+B>C&&A+C>B&&C+B>A){
    console.log('Isso pode ser um triangulo')

if(A==B&&A==C){
    console.log('EQUILATERO')
}else if(A!==B&&A!==C&&C!==B){
    console.log('ESCALENO')
}else if(A==B!==C || A==C!==B || B==C!==A || B==A!==C ){
    console.log ('ISOSCELES')
}




}else{
    console.log('Isso nao pode ser um triangulo')
}


}

main()