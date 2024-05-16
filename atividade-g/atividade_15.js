import { question } from "readline-sync"

function main(){
    
    var kg_morangos, kg_macas, preco_morango, preco_macas, total, desconto, total_kg, total_1

    kg_morangos=Number(question('Digite a quantidade de morangos(Kg): '))
    kg_macas=Number(question('Digite a quantidade de macas(Kg): '))
    total_kg=kg_macas+kg_morangos

if(kg_morangos<=5){
    preco_morango=kg_morangos*2.5
}else{
    preco_morango=kg_morangos*2.2
}

if(kg_macas<=5){
    preco_macas=kg_macas*1.8
}else{
    preco_macas=kg_macas*1.5
}
    total=preco_macas+preco_morango
    
if(total>25||total_kg>8){
    desconto=total*0.1
    total_1=total-desconto
    console.log(`O valor total a se pagar é de ${total_1}`)
}else{
    console.log(`O valor total a se pagar é de ${total}`)
}
    
    








}
main()