import{question}from  'readline-sync'

function main(){

    const A=Number(question('Digite o valor de A: '))
if(A!=0){
    const B=Number(question('Digite o valor de B: '))
    const C=Number(question('Digite o valor de C: '))

    const DELTA=(B**2)-4*(A*C)
    const X1=(-B+Math.sqrt(DELTA))/(2*A)
    const X2=(-B-Math.sqrt(DELTA))/(2*A)
    console.log(`O valor de seu delta é de ${DELTA}, X1=${X1.toFixed(2)}, X2=${X2.toFixed(2)}`)









}else {
    console.log('NUMERO INVALIDO')
}







}

main()