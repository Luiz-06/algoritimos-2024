function exponencial(N, E){
    let potencia = 1

    for (let i = 1; i <= E; i ++){
        potencia = potencia * N
    }

    return potencia
}

const N = 2
const E = 4

const potencia = exponencial(N, E)
console.log(`${N} elevado a ${E} = ${potencia}`)