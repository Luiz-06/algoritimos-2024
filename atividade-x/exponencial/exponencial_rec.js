function exponencial(N, E, potencia = 1, voltas = 0){

    if (voltas >= E){
        return potencia
    }

    potencia = potencia * N

    return exponencial(N, E, potencia, voltas + 1)
}

const N = 2
const E = 4

const potencia = exponencial(N, E)
console.log(`${N} elevado a ${E} = ${potencia}`)
