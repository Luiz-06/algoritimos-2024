import { question } from "readline-sync";

function main(){

    let qtd_serra=0
    let qtd_ciro=0
    let qtd_dilma=0
    let qtd_indeciso=0
    let qtd_outros=0
    let qtd_nulo=0
    let entrevistados=0

    while(true){
        let opniao=Number(question('Opiniao publica: '))
    if(opniao===-1){
        break
    }else if(opniao===45){
        qtd_serra++
    }else if(opniao===13){
        qtd_dilma++
    }else if(opniao===23){
        qtd_ciro++
    }else if(opniao===99){
        qtd_indeciso++
    }else if(opniao===98){
        qtd_outros++
    }else if(opniao===0){
        qtd_nulo++
    }
        entrevistados++
    }

    const total=qtd_ciro+qtd_dilma+qtd_serra+qtd_indeciso+qtd_nulo+qtd_outros
    const porcentagem_ciro=(qtd_ciro*100)/total
    const porcentagem_dilma=(qtd_dilma*100)/total
    const porcentagem_serra=(qtd_serra*100)/total
    const porcentagem_outros=(qtd_outros*100)/total
    const porcentagem_nulo=(qtd_nulo*100)/total
    const porcentagem_indeciso=(qtd_indeciso*100)/total
    const total_entrevistados=entrevistados

    console.log(`Porcentagem Dilma     : ${porcentagem_dilma.toFixed(0)} %`)
    console.log(`Porcentagem Serra     : ${porcentagem_serra.toFixed(0)} %`)
    console.log(`Porcentagem Ciro      : ${porcentagem_ciro.toFixed(0)} %`)
    console.log(`Porcentagem Outros    : ${porcentagem_outros.toFixed(0)} %`)
    console.log(`Porcentagem Nulo      : ${porcentagem_nulo.toFixed(0)} %`)
    console.log(`Porcentagem Inceciso  : ${porcentagem_indeciso.toFixed(0)} %`)
    console.log(`Total de entrevistados: ${entrevistados}`)

}
main()