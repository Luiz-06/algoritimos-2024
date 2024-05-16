import { question } from "readline-sync";

function main(){

    console.log('*****QUADRADO PERFEITO******')
    const numero=Number(question('Digite um numero: '))
    const raiz=Math.sqrt(numero)
    const raiz_inteira=Math.floor(raiz)

if(raiz-raiz_inteira===0){
    console.log('Quadrado perfeito')
}else{
    console.log('Esse numero não é um quadrado perfeito')
}







}

main()