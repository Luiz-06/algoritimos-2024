import { question } from "readline-sync";

function main(){

    let soma_salario_antigo=0
    let soma_salario_novo=0
    let salario_antigo
    let salario_novo

    while(true){
        let salario_antigo=Number(question('Salario antigo: '))
    if(salario_antigo===0){
        break
    }else if(salario_antigo<3000){
        let salario_novo=salario_antigo*1.25
        console.log(`Novo salario: ${salario_novo} R$`)
        soma_salario_novo+=salario_novo
    }else if(salario_antigo<6000){
        let salario_novo=salario_antigo*1.20
        console.log(`Novo salario: ${salario_novo} R$`)
        soma_salario_novo+=salario_novo
    }else if(salario_antigo<10000){
        let salario_novo=salario_antigo*1.15
        console.log(`Novo salario: ${salario_novo} R$`)
        soma_salario_novo+=salario_novo
    }else if(salario_antigo>=10000){
        let salario_novo=salario_antigo*1.10
        console.log(`Novo salario: ${salario_novo} R$`)
        soma_salario_novo+=salario_novo
    }
    soma_salario_antigo+=salario_antigo
    }
    
    console.log(`A somatoria dos salarios antigos é ${soma_salario_antigo} R$`)
    console.log(`A somatoria dos novos salarios é ${soma_salario_novo} R$`)

}
main()