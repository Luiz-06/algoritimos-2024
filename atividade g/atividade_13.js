import { question } from "readline-sync"

function main(){

    console.log('****CRIME****')
    const pergunta_1=question('Telefonou para a vitima ? ')
    const pergunta_2=question('Esteve no local do crime ? ')
    const pergunta_3=question('Mora perto da viitma ? ')
    const pergunta_4=question('Devia para a vitima ? ')
    const pergunta_5=question('Ja trabalhou com a vitima ? ')

if(pergunta_1==='sim'&&pergunta_2==='sim'){
    console.log('Suspeita')
}else if(pergunta_1==='sim'&&pergunta_3==='sim'){
    console.log('Suspeito')
}else if(pergunta_1==='sim'&&pergunta_4==='sim'){
    console.log('Suspeita')
}else if(pergunta_1==='sim'&&pergunta_5==='sim'){
    console.log('Suspeita')
}else if(pergunta_2==='sim'&&pergunta_3==='sim'){
    console.log('Suspeito')
}else if(pergunta_2==='sim'&&pergunta_4==='sim'){
    console.log('Suspeita')
}else if(pergunta_2==='sim'&&pergunta_5==='sim'){
    console.log('Suspeito')
}else if(pergunta_3==='sim'&&pergunta_4==='sim'){
    console.log('Suspeito')
}else if(pergunta_3==='sim'&&pergunta_5==='sim'){
    console.log('Suspeita')
}else if(pergunta_4==='sim'&&pergunta_5==='sim'){
    console.log('Suspeito')
}







if(pergunta_1==='sim'&&pergunta_2==='sim'&&pergunta_3==='sim'){
    console.log('Cúmplice')
}else if(pergunta_1==='sim'&&pergunta_2==='sim'&&pergunta_4==='sim'){
    console.log('Cúmplice')
}else if(pergunta_1==='sim'&&pergunta_2==='sim'&&pergunta_5==='sim'){
    console.log('Cúmplice')
}else if(pergunta_1==='sim'&&pergunta_3==='sim'&&pergunta_4==='sim'){
    console.log('Cúmplice')
}else if(pergunta_1==='sim'&&pergunta_3==='sim'&&pergunta_5==='sim'){
    console.log('Cúmplice')
}else if(pergunta_1==='sim'&&pergunta_4==='sim'&&pergunta_5==='sim'){
    console.log('Cúmplice')
}else if(pergunta_2==='sim'&&pergunta_3==='sim'&&pergunta_4==='sim'){
    console.log('Cúmplice')
}else if(pergunta_2==='sim'&&pergunta_3==='sim'&&pergunta_5==='sim'){
    console.log('Cúmplice')
}else if(pergunta_3==='sim'&&pergunta_4==='sim'&&pergunta_5==='sim'){
    console.log('Cúmplice')
}else if(pergunta_5==='sim'&&pergunta_4==='sim'&&pergunta_2==='sim'){
    console.log('Cúmplice')
}





if(pergunta_1==='sim'&&pergunta_2==='sim'&&pergunta_3==='sim'&&pergunta_4==='sim'&&pergunta_5==='sim'){
    console.log('Assassino')
}









}
main()