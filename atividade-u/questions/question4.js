import { getData, print } from "../functions/functions.js"

export function question4(){
    console.clear()

    const palavra = getData('Palavra : ')
    const serieLetras = getData('Letras a serem verificadas  : ')

    print(uses_only(palavra, serieLetras))

    const sair = getData('Pressione Enter para sair')
    console.clear()
}

function uses_only(palavra, serieLetras){
    const letras = serieLetras.split('')

    for (let i = 0; i < palavra.length; i ++){
        for (let letra of letras){
            if (palavra[i] == letra){
                return true
            }
        }
    }

    return false
}