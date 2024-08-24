import { adcArray, filterArray, mapArray, printArray, removeArray } from '../item4/vetor_utils.js'
import { getData, getNumber, getPositiveNumber, print } from '../functions/functions.js'

//Ficou mal feito .

function main(){
    const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let sair 

    const menu = `
    1 - Adicionar Item
    2 - Remover Item
    3 - Transformar Vetor
    4 - Filtrar Vetor 
    5 - Mostrar Vetor
    6 - Sair
    `

    while (true){
        print(menu)

        const resposta = getPositiveNumber(getNumber('Opcao : '))

        switch (resposta){
            case 1 :
                console.clear()
                adcArray(vetor, 11)
                sair = getData('Pressione Enter para sair')
                console.clear()
                break
            case 2 :
                console.clear()
                removeArray(vetor, 3)
                sair = getData('Pressione Enter para sair')
                console.clear()
                break
            case 3 :
                console.clear()
                const vetorTransformado = mapArray(vetor, a => a ** 2)
                print(vetorTransformado)
                sair = getData('Pressione Enter para sair')
                console.clear()
                break
            case 4 :
                console.clear()
                const vetorFiltrado = filterArray(vetor, a => a % 2 === 0)
                print(vetorFiltrado)
                sair = getData('Pressione Enter para sair')
                console.clear()
                break
            case 5 :
                console.clear()
                printArray(vetor, print)
                sair = getData('Pressione Enter para sair')
                console.clear()
                break
            case 6 :
                console.clear()
                print('Saindo ...')
                return
            default :
                console.clear()
                print('Opcao invalida , tente novamente')
        }
    }
}

main()