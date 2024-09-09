function somatorio(min, max, n, box = [], resposta = 0) {
    if (n === 0) {
        return { box, resposta }
    }

    const novoNumero = numberAletory(min, max)
    box.push(novoNumero)
    resposta += novoNumero

    return somatorio(min, max, n - 1, box, resposta)
}

function numberAletory(min, max) {
    if (min > max) {
        throw new Error("Valor mínimo maior que o máximo");
    }

    return Math.floor(Math.random() * (max - min + 1)) + min
}

const min = 1
const max = 10
const n = 2

const { box, resposta } = somatorio(min, max, n)
console.log(box)
console.log(resposta)
