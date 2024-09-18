import { question } from "readline-sync"

function getNumber(mensagem){
    return Number(question(mensagem))
}

function getData(mensagem){
    return question(mensagem)
}

function print(mensagem){
    return console.log(mensagem)
}

function getNaturalNumber(numero){
    if (numero >= 0){
        return numero
    }else {
        throw new Error('Apenas valores positivos')
    }
}

function getPositiveNumber(numero){
    if (numero > 0){
        return numero
    }else {
        throw new Error('Apenas valores positivos')
    }
}

function getNegativeNumber(numero){
    if (numero < 0){
        return numero
    }else {
        throw new Error('Apenas valores positivos')
    }
}

function numberAletory(min, max){
    if (min > max) {
        throw new Error("Valor mínimo maior que o máximo");
    }
    
      return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

function clear(){
    const sair = getData('Pressione Enter para sair')
    console.clear()
}

export {getData, getNumber, print, getNaturalNumber, getPositiveNumber, numberAletory, filterArray, mapArray, adcArray, removeArray, getNegativeNumber, clear}