import { question } from "readline-sync"

function main(){


    const hora=Number(question('Quantidade de horas trabalhadas por mes: '))
    const v_hora=Number(question('Qual o valor da sua hora: '))
    const valor_bruto=v_hora*hora
  
    if(valor_bruto>0&&valor_bruto<=900){
        const ir=0
        const INSS=valor_bruto*0.1
        const FGTS=valor_bruto*0.11
        const total_descontos=ir+INSS
        const liquido=valor_bruto-total_descontos
        console.log(`Valor bruto:${valor_bruto}`)
        console.log(`Imposto de renda:${ir}`)
        console.log(`INSS:${INSS}`)
        console.log(`FGTS:${FGTS}`)
        console.log(`Total de descontos:${total_descontos}`)
        console.log(`Salario liquido:${liquido}`)
    }else if(valor_bruto>900&&valor_bruto<=1500){
        const ir=valor_bruto*0.05
        const INSS=valor_bruto*0.1
        const FGTS=valor_bruto*0.11
        const total_descontos=ir+INSS
        const liquido=valor_bruto-total_descontos
        console.log(`Valor bruto:${valor_bruto}`)
        console.log(`Imposto de renda:${ir}`)
        console.log(`INSS:${INSS}`)
        console.log(`FGTS:${FGTS}`)
        console.log(`Total de descontos:${total_descontos}`)
        console.log(`Salario liquido:${liquido}`)
    }else if(valor_bruto>1500&&valor_bruto<=2500){
        const ir=valor_bruto*0.1
        const INSS=valor_bruto*0.1
        const FGTS=valor_bruto*0.11
        const total_descontos=ir+INSS
        const liquido=valor_bruto-total_descontos
        console.log(`Valor bruto:${valor_bruto}`)
        console.log(`Imposto de renda:${ir}`)
        console.log(`INSS:${INSS}`)
        console.log(`FGTS:${FGTS}`)
        console.log(`Total de descontos:${total_descontos}`)
        console.log(`Salario liquido:${liquido}`)
    }else if(valor_bruto>2500){
        const ir=valor_bruto*0.2
        const INSS=valor_bruto*0.1
        const FGTS=valor_bruto*0.11
        const total_descontos=ir+INSS
        const liquido=valor_bruto-total_descontos
        console.log(`Valor bruto:${valor_bruto}`)
        console.log(`Imposto de renda:${ir}`)
        console.log(`INSS:${INSS}`)
        console.log(`FGTS:${FGTS}`)
        console.log(`Total de descontos:${total_descontos}`)
        console.log(`Salario liquido:${liquido}`)
    }

    
    




}
main()