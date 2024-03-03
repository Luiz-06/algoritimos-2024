import { question } from "readline-sync"

function main(){
    const turno=question('Em que turno voce estuda: ')

if(turno==="m"||turno==='M'){
    console.log('Bom dia aluno')
}else if(turno==="v"||turno==="V"){
    console.log('Boa tarde aluno')
}else if(turno==="N"||turno==="n"){
    console.log('Boa noite aluno')
}else{
    console.log('Turno invalido')
}






}
main()