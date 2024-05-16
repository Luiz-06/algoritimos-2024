import { question } from "readline-sync";


function atividade(){

    const altura=Number(question('Digite sua altura em metros(ex:1.70): '))
    const peso=Number(question('Digite seu peso em Kg(ex:60 Kg): '))
    const IMC=(peso/altura**2)

if(IMC<25){
    console.log('Voce esta com o seu peso normal')
}else if(IMC>=25&&IMC<=30){
    console.log('Voce esta obeso')
}else if(IMC>30){
    console.log('Voce esta em estado de obesidade morbida')
    console.log('Procure ajuda')
}










}

atividade()