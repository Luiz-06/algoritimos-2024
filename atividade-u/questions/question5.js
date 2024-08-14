import { getData, print } from "../functions/functions.js"

export function question5(){
    console.clear()

    const palavra = getData('Palavra : ')
    const letrasObrigatorias = getData('Letras Obrigatorias : ')

    print(uses_all(palavra, letrasObrigatorias))

    const sair = getData('Pressione Enter para sair')
    console.clear()
}

function uses_all(p, l_o){
    const letras = l_o.split('')
    let letrasObrigatoriasUsadas = 0

    for (let i = 0; i < p.length; i ++){
        for (let letra of letras){
            if (p[i] == letra){
                letrasObrigatoriasUsadas ++
            }
        }
    }

    if (letrasObrigatoriasUsadas == letras.length){
        return true
    }else {
        return false
    }
}