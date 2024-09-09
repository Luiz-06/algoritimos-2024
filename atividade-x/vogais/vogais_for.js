function contarVogais(frase){
    let qtdVogais = 0
    const vogais = 'aeiouAEIOU'

    for (let i = 0; i < frase.length; i ++){
        for (let j = 0; j < vogais.length; j ++){
            if (frase[i] == vogais[j]){
                qtdVogais++
            }
        }
    }
    
    return qtdVogais
}

function contarConsoantes(frase){
    let qtdConsoantes = 0
    const consoantes = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'

    for (let i = 0; i < frase.length; i ++){
        for (let j = 0; j < consoantes.length; j ++){
            if (frase[i] == consoantes[j]){
                qtdConsoantes++
            }
        }
    }
    
    return qtdConsoantes
}

const frase = 'Testando exercicio'

const qtdVogais = contarVogais(frase)
const qtdConsoantes = contarConsoantes(frase)

const resposta = `
Frase                    --> ${frase}
Quantidade de vogais     --> ${qtdVogais}
Quantidade de consoantes --> ${qtdConsoantes}
`

console.log(resposta)