import { question } from "readline-sync";

function main(){

  const A=Number(question('Digite um numero: '))
  const B=Number(question('Digite um segundo numero: '))
  const C=Number(question('Digite um terceiro numero: '))

  if (A>B&A>C){
    console.log(`O maior numero é ${A}`)
  }else if(B>A&B>C){
    console.log(`O maior numero é ${B}`)
  }else{
    console.log(`O maior numero é ${C}`)
  }
}


main()