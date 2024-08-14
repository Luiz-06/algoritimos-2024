import { getData, print } from "../functions/functions.js"

export function question3(){
    console.clear()

    const palavra = getData('Palavra : ')
    const letrasProibidas = getData('Sequencia de letras proibidas : ')
    
    print(avoids(palavra, letrasProibidas))

    const sair = getData('Pressione Enter para sair')
    console.clear()
}

function avoids(palavra, letrasProibidas){
    const letras = letrasProibidas.split('')

    for (let i = 0; i < palavra.length; i ++){
        for (let letra of letras){
            if (palavra[i] == letra){
                return false
            }
        }
    }

    return true
}