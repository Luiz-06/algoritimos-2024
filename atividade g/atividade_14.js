import { question } from "readline-sync"

function main(){

    const tipo=question('Qual o tipo de combustivel? ')
    const quant=Number(question('Quantos litros ? '))

if(tipo==='A'||tipo==='a'){
    console.log('Alcool')
if(quant>0&&quant<=20){
    const desconto3=1.9*0.03
    const total_desconto_3=1.9-desconto3
    const valor_total_3=quant*total_desconto_3
    console.log(`O valor a ser pago é de ${valor_total_3.toFixed(2)}`)
}   
if(quant>20){
    const desconto5=1.9*0.05
    const total_desconto_5=1.9-desconto5
    const valor_total_5=quant*total_desconto_5
    console.log(`O valor a ser pago é de ${valor_total_5.toFixed(2)}`)
}


}else if(tipo==='G'||tipo==='g'){
    console.log('Gasolina')
if(quant>0&&quant<=20){
    const desconto4=2.5*0.04
    const total_desconto_4=2.5-desconto4
    const valor_total_4=quant*total_desconto_4
    console.log(`O valor a ser pago é de ${valor_total_4.toFixed(2)}`)
}   
if(quant>20){
    const desconto6=2.5*0.06
    const total_desconto_6=2.5-desconto6
    const valor_total_6=quant*total_desconto_6
    console.log(`O valor a ser pago é de ${valor_total_6.toFixed(2)}`)
}










}





}
main()