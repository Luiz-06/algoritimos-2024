import { question } from "readline-sync";

function main(){

    const letra=question('Digite  uma letra: ')

if(letra==="a"||letra==="A"||letra==="e"||letra==="E"||letra==="i"||letra=="I"||letra==="O"||letra==="o"||letra==="u"||letra==="U"){
    console.log('Vogal')
}else{
    console.log('Consoante')
}





}

main()