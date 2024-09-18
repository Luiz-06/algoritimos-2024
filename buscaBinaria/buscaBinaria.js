import { getNumber, getPositiveNumber, numberAletory, print } from './functions.js'

function main() {
    const box = [1, 3, 4, 2, 7, 5, 6, 10, 9, 8]
    box.sort((a, b) => a - b)

    const x = getPositiveNumber(getNumber('Qual numero deseja encontrar: '))
    const resposta = realizarBusca(box, x, 0, box.length - 1)

    resposta !== -1
        ? print(`O número ${x} foi encontrado no índice ${resposta}`)
        : print(`O número ${x} não foi encontrado no array`)
}

function realizarBusca(box, valorDesejado, inicio, fim) {
    if (inicio > fim) return -1

    let meio = Math.floor((inicio + fim) / 2)

    return box[meio] === valorDesejado
        ? meio
        : box[meio] < valorDesejado
        ? realizarBusca(box, valorDesejado, meio + 1, fim)
        : realizarBusca(box, valorDesejado, inicio, meio - 1)
}

main()
