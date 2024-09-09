function exponencial(N, E){
    let potencia = 1
    let voltas = 0

    while (voltas < E){
        potencia = potencia * N
        voltas ++
    }

    return potencia
}

const N = 2
const E = 4

const potencia = exponencial(N, E)
console.log(`${N} elevado a ${E} = ${potencia}`)