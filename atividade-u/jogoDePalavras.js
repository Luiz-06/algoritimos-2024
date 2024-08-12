import { question } from "readline-sync";
import { readFileSync } from "fs"

function menu(){

    let linha 

    const questoes = `
    - Questão 1
    - Questão 2
    - Questão 3
    - Questão 4
    - Questão 5
    - Questão 6
    - Questão 7
    - Questão 8
    - Questão 9
    - Encerrar 10
    `

    while (true){
    console.log(questoes)
    const resposta = Number(question('Qual questão deseja acessar : '))

    switch (resposta){
        case 1:
            questao1(linha)
            break
        case 2:
            questao2(linha)
            break
        case 3:
            questao3()
            break
        case 4:
            questao4()
            break
        case 5:
            questao5()
            break
        case 6:
            questao6()
            break
        case 7:
            questao7()
            break
        case 8:
            questao8()
            break
        case 9:
            questao9()
            break
        case 10 : 
            console.clear()
            console.log('Encerrando ...')
            return
        default:
            console.clear()
            console.log('Questão não encontrada')
            console.log('Por favor , digite novamente')
    }
    }
}

function questao1(linha){
    console.clear() 

    let qtdDePalavras20 = 0

    const dados = readFileSync('words.txt', "UTF-8")
    const linhas = dados.split("\n")

    for (linha of linhas){
        if (linha.length > 20){
            console.log(linha)
            qtdDePalavras20 ++
        }
    }
    console.log('--------------------------------------------------------')
    console.log(`O texto possui ${qtdDePalavras20} palavaras com mais de 20 letras`)
    
    const sair = question('Pressione Enter para sair')
    console.clear()
}

function questao2(linha){
    console.clear()

    let palavrasSemE = 0

    const palavra = question('Palavra : ')
    const resposta = has_no_e(palavra)
    console.log(resposta)

    console.log('Parte dois da questão ...')

    const dados = readFileSync('words.txt', "UTF-8")
    const linhas = dados.split("\n")

    for (linha of linhas){
        if (palavraPossuiE(linha) == false){
            console.log(linha)
            palavrasSemE ++
        }
    }

    const percent = palavrasSemE * 100 / (linhas.length)

    console.log(`${percent.toFixed(1)} % das palavras do arquivo não possuem a letra "E"`)

    const sair = question('Pressione Enter para sair')
    console.clear()
}

function questao3(){}

function questao4(){}

function questao5(){}

function questao6(){}

function questao7(){}

function questao8(){}

function questao9(){}

function has_no_e(palavra){
    for (let i = 0 ; i < palavra.length; i++){
        if (palavra[i] == 'e' || palavra[i] == 'E'){
            return 'True'
        }
    }

    return 'False'
}

function palavraPossuiE(linha){
    for (let i = 0; i < linha.length; i ++){
        if (linha[i] == 'e' || linha[i] == 'E'){
            return true
        }
    }

    return false
}

menu()