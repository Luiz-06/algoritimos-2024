import { getData, print } from '../functions/functions.js'

export function question6(){
    console.clear()

    const palavra = getData('Palavra : ')
    print(is_abecedarian(palavra))

    const sair = getData('Pressione Enter para sair')
    console.clear()
}

function is_abecedarian(p){
    const letras = p.split('')
    const letrasOrdenadas = letras.slice().sort()

    for (let i = 0; i < letras.length; i ++){
        if (letras[i] !== letrasOrdenadas[i]){
            return false
        }
    }

    return true
}