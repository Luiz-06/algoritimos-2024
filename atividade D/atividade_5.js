import {question} from 'readline-sync'

function main(){
    const A=Number(question('Digite um numero: '))
    const B=Number(question('Digite um numero: '))
    const C=Number(question('Digite um numero: '))
    
    if(A<B&B<C){
        console.log(`${A},${B},${C}`)
    }else if(A<C&C<B){
        console.log(`${A},${C},${B}`)
    }else if(B<A&A<C){
        console.log(`${B},${A},${C}`)
    }else if(B<C&C<A){
        console.log
    }else if(C<A&A<B){
        console.log(`${C},${A},${B}`)
    }else{
        console.log(`${C},${B},${A}`)
    }

}

main()