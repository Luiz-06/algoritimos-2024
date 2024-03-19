import { question } from "readline-sync";

function main(){

    let pontos_a=0
    let pontos_b=0

    while(true){
        let a=Number(question('Pontos A:'))
        let b=Number(question('Pontos B:'))
        pontos_a+=a
        pontos_b+=b
    if(pontos_a>=21||pontos_b>=21){
        break
    }
    }

    if(pontos_a=21&&pontos_b<=19){
        console.log('Jogador A venceu')
    }else if(pontos_b=21&&pontos_a<=19){
        console.log('Jogador B venceu')
    }else if(pontos_a-pontos_b===2){
        console.log('Jogador A venceu')
    }else if(pontos_b-pontos_a===2){
        console.log('Jogador B venceu')
    }







}
main()