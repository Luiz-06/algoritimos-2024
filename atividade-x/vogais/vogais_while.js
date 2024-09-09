function contarVogais(frase){
    let voltasI = 0
    let qtdVogais = 0
    const vogais = 'aeiouAEIOU'

    while (voltasI < frase.length){
        let voltasJ = 0
        while (voltasJ < vogais.length){
            if (frase[voltasI] == vogais[voltasJ]){
                qtdVogais ++
            }
            voltasJ ++
        }
        voltasI ++
    }
    
    return qtdVogais
}

function contarConsoantes(frase){
    let voltasI = 0
    let qtdConsoantes = 0
    const consoantes = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'

    while (voltasI < frase.length){
        let voltasJ = 0
        while (voltasJ < consoantes.length){
            if (frase[voltasI] == consoantes[voltasJ]){
                qtdConsoantes ++
            }
            voltasJ ++
        }
        voltasI ++
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