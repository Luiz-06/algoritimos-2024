import { question } from "readline-sync"

function main(){
    const salario=Number(question('Valor do salario atual: '))

if(salario>=0&&salario<=280){
    const salario_20=salario*1.20
    const aumento=salario_20-salario
    console.log(`Salario antigo: ${salario}`)
    console.log(`Percentual aplicado: 20%`)
    console.log(`Valor do aumento: ${aumento.toFixed(2)}`)
    console.log(`Novo salario: ${salario_20.toFixed(2)}`)
}else if(salario>280&&salario<=700){
    const salario_15=salario*1.15
    const aumento_1=salario_15-salario
    console.log(`Salario antigo: ${salario}`)
    console.log(`Percentual aplicado: 15%`)
    console.log(`Valor do aumento: ${aumento_1.toFixed(2)}`)
    console.log(`Novo salario: ${salario_15.toFixed(2)}`)
}else if(salario>700&&salario<=1500){
    const salario_10=salario*1.10
    const aumento_2=salario_10-salario
    console.log(`Salario antigo: ${salario}`)
    console.log(`Percentual aplicado: 10%`)
    console.log(`Valor do aumento: ${aumento_2.toFixed(2)}`)
    console.log(`Novo salario: ${salario_10.toFixed(2)}`)
}else if(salario>1500){
    const salario_5=salario*1.05
    const aumento_3=salario_5-salario
    console.log(`Salario antigo: ${salario}`)
    console.log(`Percentual aplicado: 5%`)
    console.log(`Valor do aumento: ${aumento_3.toFixed(2)}`)
    console.log(`Novo salario: ${salario_5.toFixed(2)}`)
}







}
main()