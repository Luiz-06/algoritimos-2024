import { question } from "readline-sync";

    const num=Number(question('Digite um numero de 3 digitos: '))
    const C=Math.floor(num/100)
    const resto=num%100
    const D=Math.floor(resto/10)
    const U=resto%10
    const inverso=U*100+D*10+C
    const sub=num+inverso
    
    console.log(`${num} + ${inverso} é igual a: ${sub}`)


    

    