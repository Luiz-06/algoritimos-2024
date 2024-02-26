import { question } from "readline-sync";

    const A=Number(question('Digite um numero: '))
    const B=Number(question('Digite um numero: '))
    const C=Number(question('Digite um numero: '))
    const D=Number(question('Digite um numero: '))
    const E=Number(question('Digite um numero: '))
    
if(A>B&&A>C&&A>D&&A>E){
    console.log (`o maior numero é  ${A}`)
}else if(B>A&&B>C&&B>D&&B>E){
    console.log(`o maior numero é  ${B}`)
}else if(C>A&&C>B&&C>D&&C>E){
    console.log(`o maior numero é  ${C}`)
}else if(D>A&&D>B&&D>C&&D>E){
    console.log(`o maior numero é  ${D}`)
}else if(E>A&&E>B&&E>C&&E>D){
    console.log(`o maior numero é  ${E}`)
}

if(A<B&&A<C&&A<D&&A<E){
    console.log(`e o menor numero é  ${A}`)
}else if(B<A&&B<C&&B<D&&B<E){
    console.log(`e o menor numero é  ${B}`)
}else if(C<A&&C<B&&C<D&&C<E){
    console.log(`e o menor numero é  ${C}`)
}else if(D<A&&D<B&&D<C&&D<E){
    console.log(`e o menor numero é  ${D}`)
}else if(E<A&&E<B&&E<C&&E<D){
    console.log(`e o menor numero é  ${D}`)
}