import { question } from "readline-sync";

function main(){

    mostre_ao_usuario('>>>>Notas<<<<')

 while(true){
    let matricula=pedir_dado_numerico('Numero da matricula: ')
  if(matricula===0){
    break
 }else{
    let n1=pedir_dado_numerico('Nota 1: ')
    let n2=pedir_dado_numerico('Nota 2: ')
    let n3=pedir_dado_numerico('Nota 3: ')
    let media=(2*n1+3*n2+5*n3)/10
 if(media>10||media<0){
    mostre_ao_usuario('Notas invalidas')
 }else if(media>=7){
    mostre_ao_usuario('APROVADO')
 }else if(media<7){
    mostre_ao_usuario('REPROVADO')
 }
 }

}


}

    function mostre_ao_usuario(mensagem){
    return console.log(mensagem)
    }
     function pedir_dado(mensagem){
     return question(mensagem)
     }
      function pedir_dado_numerico(mensagem){
      return Number(question(mensagem))
      }

main()