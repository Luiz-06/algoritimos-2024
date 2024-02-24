import{question} from 'readline-sync'

function main(){
const A= Number(question('Digite um numero: '))
const B=Number(question('Digite um numero: '))
const C=Number(question('Digite um numero: '))

if(A==B || A==C || C==B || A==B==C){
    console.log('Voce escreveu numeros repetidos')

if(A===B||A===C||B===C){
    console.log('Voce digitou 2 numeros iguais')
}else if(A==B&&A==C){
    console.log('Voce digitou 3 numeros iguais')
}



}else{
    console.log('Voce nao digitou numeros repetidos')
}
 
}



main()