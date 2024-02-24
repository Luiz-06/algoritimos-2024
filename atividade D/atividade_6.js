import { question } from "readline-sync"; 

function main(){

    const A=Number(question('Digite o primeiro angulo: '))
    const B=Number(question('Digite o segundo angulo: '))
    const C=Number(question('Digite o terceiro angulo: '))

    if(A+B+C===180){
        console.log('É um triangulo')
    if(A<90&&B<90&&C<90){
        console.log('É um triângulo acutangulo')
    }else if(A===90 || B===90 || C===90){
        console.log('É um triângulo retangulo')
    }else if(A>90 || B>90 || C>90){
        console.log('É um triângulo obtusangulo')
    }
    
    
    }else{
        console.log('Isso nao e um triangulo')
    }
}

main()