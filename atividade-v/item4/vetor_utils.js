function filterArray(colecao, criterio){
    const novaLista = new Array ()

    for (let item of colecao){
        if (criterio(item)){
            novaLista.push(item)
        }
    }

    return novaLista
}

function mapArray(colecao, criterio){
    const novaLista = new Array ()

    for (let item of colecao){
        novaLista.push(criterio(item))
    }

    return novaLista
}

function adcArray(colecao, item){
    colecao.push(item)

    return colecao
}

function removeArray(colecao, item){
    for (let indice in colecao){
        if (colecao[indice] === item ){
            colecao.splice(indice, 1)
        }
    }

    return colecao
}

function printArray(colecao, print){
    print(colecao)
}

export {printArray, removeArray, adcArray, filterArray, mapArray}