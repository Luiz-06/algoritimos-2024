import { question } from "readline-sync";

function main(){

    const x1=Number(question('Digite o valor da coordenada x1: '))
    const y1=Number(question('Digite o valor da coordenada y1: '))
    const x2=Number(question('Digite o valor da coordenada x2: '))
    const y2=Number(question('Digite o valor da coordenada y2: '))
    const area=(x2-x1)*(y2-y1)

if(area>0){
    console.log(`A área do retângulo é ${area}`)
}else{
    console.log('Area invalida')
}





}
main()