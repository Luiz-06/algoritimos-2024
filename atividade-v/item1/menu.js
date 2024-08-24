import { getData, getNaturalNumber, getNumber, getPositiveNumber, numberAletory, print } from '../functions/functions.js'

function menu(){
    const menu = `
    0 - Fechar
    1 - Inicalizar Vetor Númerico
    2 - Resetar Vetor
    3 - Ver quantidade de itens
    4 - Maior e Menor valor do vetor
    5 - Somatorio dos valores
    6 - Média dos valores
    100 - Printar Vetor
    `
    const box = []

    while(true){
        print(menu)
        
        const resposta = getNaturalNumber(getNumber('Option : '))

        switch (resposta){
            case 0 :
                console.clear()
                print('Exit...')
                return
            case 1 :
                inicializarVetor(box)
                break
            case 2 :
                resetVetor(box)
                break
            case 3 :
                numeroDeItens(box)
                break
            case 4 : 
                maiorMenor(box)
                break
            case 5 :
                somatorio(box)
                break
            case 6 :
                mediaDosValores(box)
                break
            case 100 :
                printarVetor(box, print)
                break
            default :
                console.clear()
                print('Numero invalido , tente novamente')
        }
    }
}

function inicializarVetor(box){
    console.clear()
    const menu = `
    0 - Voltar
    1 - Preencher com números aleatórios 
    2 - Digitar Números
    `

    while(true){
        print(menu)
        const resposta = getNaturalNumber(getNumber('Option : '))

        switch (resposta){
            case 0 :
                console.clear()
                print('Voltando ...')
                return
            case 1 : 
                gerarNumerosAleatorios(box)
                break
            case 2 :
                inserirNumeros(box)
                break
            default :
                console.clear()
                print('Número inválido ,tente novamente')
        }
    }
}

function gerarNumerosAleatorios(box){
    console.clear()

    const nMaximo = getNaturalNumber(getNumber('N maximo : '))
    const nMínimo = getNaturalNumber(getNumber('N minimo : '))
    const N = getPositiveNumber(getNumber('Quantos  itens tera o vetor : '))

    for (let i = 0; i < N; i ++){
        box.push(numberAletory(nMínimo, nMaximo))
    }

    const sair = getData('Pressione Enter para sair')
    console.clear()
}

function inserirNumeros(box){
    console.clear()

    const N = getNaturalNumber(getNumber('N : '))

    for (let i = 0; i < N; i ++){
        box.push(getNaturalNumber(getNumber('Digite um numero : ')))
    }

    const sair = getData('Pressione Enter para sair')
    console.clear()
}

function resetVetor(box){
    console.clear()

    box.length = 0

    const sair = getData('Pressione Enter para sair')
    console.clear()
}

function numeroDeItens(box){
    console.clear()

    const dados = `
    Vetor --> ${box}
    Tamanho do Vetor --> O array possui ${box.length} itens
    `

    print(dados)

    const sair = getData('Pressione Enter para sair')
    console.clear()
}

function maiorMenor(box){
    console.clear()

    let maior = -Infinity
    let menor = Infinity
    
    for (let i = 0; i < box.length; i ++){
        if (box[i] > maior){
            maior = box[i]
        }

        if (box[i] < menor){
            menor = box[i]
        }
    }
    const dados = `
    Maior valor --> ${maior}
    Menor valor --> ${menor}
    `

    print(dados)

    const sair = getData('Pressione Enter para sair')
    console.clear()
}

function somatorio(box){
    console.clear()

    let somatorio = 0

    for (let itens of box){
        somatorio += itens
    }

    print(`Somatorio --> ${somatorio}`)

    const sair = getData('Pressione Enter para sair')
    console.clear()
}

function mediaDosValores(box){
    console.clear()

    let somatorio = 0

    for (let itens of box){
        somatorio += itens
    }

    const media = somatorio/box.length
    print(`Media --> ${media}`)
    
    const sair = getData('Pressione Enter para sair')
    console.clear()
}

function printarVetor(box, print){
    console.clear()
    print(box)

    const sair = getData('Pressione Enter para sair')
    console.clear()
}

menu()