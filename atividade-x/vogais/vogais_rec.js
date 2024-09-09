function contarVogais(frase, index = 0, qtdVogais = 0) {
    const vogais = 'aeiouAEIOU';
    
    if (index >= frase.length) {
        return qtdVogais;
    }

    for (let j = 0; j < vogais.length; j++) {
        if (frase[index] == vogais[j]) {
            qtdVogais++;
        }
    }

    return contarVogais(frase, index + 1, qtdVogais);
}

function contarConsoantes(frase, index = 0, qtdConsoantes = 0) {
    const consoantes = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    
    if (index >= frase.length) {
        return qtdConsoantes;
    }

    for (let j = 0; j < consoantes.length; j++) {
        if (frase[index] === consoantes[j]) {
            qtdConsoantes++;
        }
    }

    return contarConsoantes(frase, index + 1, qtdConsoantes);
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