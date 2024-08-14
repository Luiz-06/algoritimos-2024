import { getNumber, getPositiveNumber, print } from './functions/functions.js'
import {question1} from "./questions/question1.js"
import {question2} from "./questions/question2.js"
import {question3} from "./questions/question3.js"
import {question4} from "./questions/question4.js"
import {question5} from "./questions/question5.js"
import {question6} from "./questions/question6.js"

function menu(){

    let linha 

    const questoes = `
    - Questão 1
    - Questão 2
    - Questão 3
    - Questão 4
    - Questão 5
    - Questão 6
    - Exit    7
    `

    while (true){
        print(questoes)
        const resposta = getPositiveNumber(getNumber('Qual questao deseja acessar : '))

        switch (resposta){
            case 1:
                question1(linha)
                break
            case 2:
                question2(linha)
                break
            case 3:
                question3()
                break
            case 4:
                question4()
                break
            case 5:
                question5()
                break
            case 6:
                question6()
                break
            case 7 : 
                console.clear()
                print('Encerrando ...')
                return
            default:
                console.clear()
                print('Questão não encontrada')
                print('Por favor , digite novamente')
        }
    }
}

menu()