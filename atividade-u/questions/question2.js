import { getData, print } from '../functions/functions.js'
import { readFileSync } from "fs"

export function question2(linha){
    console.clear()

    let palavrasSemE = 0

    const palavra = getData('Palavra : ')
    const resposta = has_no_e(palavra)
    
    if (resposta == true){
        const dados = readFileSync('words.txt', "UTF-8")
        const linhas = dados.split("\n")
    
        for (linha of linhas){
            if (palavraPossuiE(linha) == false){
                print(linha)
                palavrasSemE ++
            }
        }
    
        const percent = palavrasSemE * 100 / (linhas.length)
    
        print(`${percent.toFixed(1)} % das palavras do arquivo não possuem a letra "E"`)
    }else {
        print('False')
    }

    const sair = getData('Pressione Enter para sair')
    console.clear()
}

function has_no_e(palavra){
    for (let i = 0 ; i < palavra.length; i++){
        if (palavra[i] == 'e' || palavra[i] == 'E'){
            return true
        }
    }

    return false
}

function palavraPossuiE(linha){
    for (let i = 0; i < linha.length; i ++){
        if (linha[i] == 'e' || linha[i] == 'E'){
            return true
        }
    }

    return false
}