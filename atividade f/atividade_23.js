import { question } from "readline-sync";

function main(){

    const dia_1=Number(question('Digite o primeiro dia: '))
if(dia_1>=1&&dia_1<=31){
    const mes_1=Number(question('Digite o primeiro mes: '))
if(mes_1>=1&&mes_1<=12){
    const ano_1=Number(question('Digite o primeiro ano: '))
if(ano_1>0){
    const dia_2=Number(question('Digite o segundo dia: '))
if(dia_2>=1&&dia_2<=31){
    const mes_2=Number(question('Digite o segundo mes: '))  
if(mes_2>=1&&mes_2<=12){
    const ano_2=Number(question('Digite o segundo ano: '))
if(ano_2<=0){
    console.log('ANO INVALIDO')
}






if(ano_1>ano_2){
    console.log('A PRIMEIRA DATA É MAIS RECENTE')
}else if(ano_2>ano_1){
    console.log('A SEGUNDA DATA É MAIS RECENTE')
}else if(mes_1>mes_2){
    console.log('A PRIMEIRA DATA É MAIS RECENTE')
}else if(mes_2>mes_1){
    console.log('A SEGUNDA DATA É MAIS RECENTE')
}else if(dia_1>dia_2){
    console.log('A PRIMEIRA DATA É MAIS RECENTE')
}else if(dia_2>dia_1){
    console.log('A SEGUNDA DATA É MAIS RECENTE')
}





}else{
    console.log('MES INVALIDO')
}
}else{
    console.log('DIA INVALIDO')
}
}else{
    console.log('ANO INVALIDO')
}
}else{
    console.log('MES INVALIDO')
}
}else{
    console.log('DIA INVALIDO')
}







}

main()