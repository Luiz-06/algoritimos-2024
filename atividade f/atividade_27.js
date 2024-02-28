import { question } from "readline-sync";

function main(){

    const ano_a=Number(question('Ano em que nasceu: '))
if(ano_a>0){
    const mes_a=Number(question('Mes em que nasceu: '))
if(mes_a>=1&&mes_a<=12){
    const dia_a=Number(question('Dia em que nasceu: '))
if(dia_a>=1&&dia_a<=31){
    const ano_atual=Number(question('Ano atual: '))
if(ano_atual>0){
    const mes_atual=Number(question('Mes atual: '))
if(mes_atual>=1&&mes_atual<=31){
    const dia_atual=Number(question('Dia atual: '))
if(dia_atual>=1&&dia_atual<=31){
    console.log('*****IDADE ATUAL*****')
    
    const idade_anos=ano_atual-ano_a
    const idade_meses=mes_atual-mes_a
    const idade_dia=dia_atual-dia_a
    
    console.log(`${idade_anos} anos`)
    console.log(`${idade_meses} meses`)
    console.log(`${idade_dia} dias`)








}else{
    console.log('DIA INVALIDO')
}
}else{
    console.log('MES INVALIDO')
}
}else{
    console.log('ANO INVALIDO')
}
}else{
    console.log('DIA INVALIDO')
}
}else{
    console.log('MES INVALIDO')
}
}else{
    console.log('ANO INVALIDO')
}






}

main()