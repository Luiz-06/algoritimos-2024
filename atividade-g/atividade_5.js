import { question } from "readline-sync"

function main(){

    const preco_1=Number(question('Preco do produto 1: '))
    const preco_2=Number(question('Preco do produto 2: '))
    const preco_3=Number(question('Preco do produto 3: '))

if(preco_1<preco_2&&preco_1<preco_3){
    console.log('Compre o primeiro produto')
}else if(preco_2<preco_1&&preco_2<preco_3){
    console.log('Compre o segundo produto')
}else{
    console.log('Compre o terceiro produto')
}




}
main()