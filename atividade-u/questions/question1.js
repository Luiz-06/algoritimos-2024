import { getData, print } from '../functions/functions.js'
import { readFileSync } from "fs"

export function question1(linha){
    console.clear() 

    let qtdDePalavras20 = 0

    const dados = readFileSync('words.txt', "UTF-8")
    const linhas = dados.split("\n")

    for (linha of linhas){
        if (linha.length > 20){
            print(linha)
            qtdDePalavras20 ++
        }
    }
    
    const resposta = `
    ------------------------------
    * O texto possui ${qtdDePalavras20} palavras com mais de 20 letras
    `
    
    print(resposta)

    const sair = getData('Pressione Enter para sair')
    console.clear()
}